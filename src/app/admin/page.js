'use client';

import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import galleryData from '../../data/gallery.json';
import postsData from '../../data/posts.json';

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('products');

    // Local state for data
    const [products, setProducts] = useState(productsData);
    const [gallery, setGallery] = useState(galleryData);
    const [posts, setPosts] = useState(postsData);

    // Forms state
    const [productForm, setProductForm] = useState({ name: '', description: '', price: '', category: '', image: '', tags: '' });
    const [galleryUrl, setGalleryUrl] = useState('');
    const [postForm, setPostForm] = useState({ title: '', excerpt: '', content: '', date: '', image: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Falsches Passwort!');
        }
    };

    const saveData = async (type, data) => {
        try {
            const res = await fetch('/api/admin/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, data }),
            });
            if (res.ok) {
                alert(`${type} erfolgreich gespeichert!`);
            } else {
                alert('Fehler beim Speichern.');
            }
        } catch (err) {
            console.error(err);
            alert('Fehler beim Speichern.');
        }
    };

    // --- Product Handlers ---
    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(), // simple ID
            ...productForm,
            tags: productForm.tags.split(',').map(t => t.trim()), // convert comma-string to array
        };
        const updated = [...products, newProduct];
        setProducts(updated);
        saveData('products', updated);
        setProductForm({ name: '', description: '', price: '', category: '', image: '', tags: '' });
    };

    const handleDeleteProduct = (id) => {
        if (!confirm('Wirklich löschen?')) return;
        const updated = products.filter(p => p.id !== id);
        setProducts(updated);
        saveData('products', updated);
    };

    // --- Gallery Handlers ---
    const handleAddImage = (e) => {
        e.preventDefault();
        if (!galleryUrl) return;
        const updated = [...gallery, galleryUrl];
        setGallery(updated);
        saveData('gallery', updated);
        setGalleryUrl('');
    };

    const handleDeleteImage = (index) => {
        if (!confirm('Wirklich löschen?')) return;
        const updated = gallery.filter((_, i) => i !== index);
        setGallery(updated);
        saveData('gallery', updated);
    };

    // --- Blog Handlers ---
    const handleAddPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...postForm,
            // Minimal HTML wrapping if user didn't provide it, or just raw
            content: postForm.content
        };
        const updated = [...posts, newPost];
        setPosts(updated);
        saveData('posts', updated);
        setPostForm({ title: '', excerpt: '', content: '', date: '', image: '' });
    };

    const handleDeletePost = (id) => {
        if (!confirm('Wirklich löschen?')) return;
        const updated = posts.filter(p => p.id !== id);
        setPosts(updated);
        saveData('posts', updated);
    };


    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <div className="login-box glass">
                    <h2>Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Passwort eingeben"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                        <button type="submit" className="btn btn-primary full-width">Login</button>
                    </form>
                </div>
                <style jsx>{`
            .login-container { height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-dark); }
            .login-box { padding: 3rem; border-radius: 20px; width: 100%; max-width: 400px; text-align: center; }
            .input-field { width: 100%; padding: 10px; margin: 20px 0; border-radius: 8px; border: 1px solid #444; background: #222; color: white; }
            .full-width { width: 100%; }
        `}</style>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="sidebar glass">
                <h2>Sushi Admin</h2>
                <ul>
                    <li className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}>Produkte</li>
                    <li className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>Galerie</li>
                    <li className={activeTab === 'blog' ? 'active' : ''} onClick={() => setActiveTab('blog')}>Blog</li>
                </ul>
                <button className="btn btn-outline logout-btn" onClick={() => setIsAuthenticated(false)}>Logout</button>
            </div>

            <div className="content-area">
                <h1>Dashboard - {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>

                {/* PRODUCTS TAB */}
                {activeTab === 'products' && (
                    <div className="tab-content">
                        <div className="form-section glass">
                            <h3>Neues Produkt hinzufügen</h3>
                            <form onSubmit={handleAddProduct} className="admin-form">
                                <input required placeholder="Name" value={productForm.name} onChange={e => setProductForm({ ...productForm, name: e.target.value })} />
                                <input required placeholder="Kategorie (z.B. Rollen)" value={productForm.category} onChange={e => setProductForm({ ...productForm, category: e.target.value })} />
                                <input required placeholder="Preis (z.B. 12,99)" value={productForm.price} onChange={e => setProductForm({ ...productForm, price: e.target.value })} />
                                <input required placeholder="Bild URL (/images/...)" value={productForm.image} onChange={e => setProductForm({ ...productForm, image: e.target.value })} />
                                <input placeholder="Tags (kommagetrennt)" value={productForm.tags} onChange={e => setProductForm({ ...productForm, tags: e.target.value })} />
                                <textarea required placeholder="Beschreibung" rows="3" value={productForm.description} onChange={e => setProductForm({ ...productForm, description: e.target.value })} />
                                <button type="submit" className="btn btn-primary">Produkt Speichern</button>
                            </form>
                        </div>

                        <div className="list-section">
                            {products.map(p => (
                                <div key={p.id} className="admin-item glass">
                                    <img src={p.image} alt={p.name} className="thumbnail" />
                                    <div className="info">
                                        <h4>{p.name}</h4>
                                        <p>{p.price} €</p>
                                    </div>
                                    <button className="btn-delete" onClick={() => handleDeleteProduct(p.id)}>Löschen</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* GALLERY TAB */}
                {activeTab === 'gallery' && (
                    <div className="tab-content">
                        <div className="form-section glass">
                            <h3>Neues Bild hinzufügen</h3>
                            <form onSubmit={handleAddImage} className="admin-form single-row">
                                <input required placeholder="Bild URL (/images/...)" value={galleryUrl} onChange={e => setGalleryUrl(e.target.value)} />
                                <button type="submit" className="btn btn-primary">Hinzufügen</button>
                            </form>
                        </div>

                        <div className="gallery-grid-admin">
                            {gallery.map((img, idx) => (
                                <div key={idx} className="gallery-thumbnail-wrapper glass">
                                    <img src={img} alt="Gallery" />
                                    <button className="btn-delete-overlay" onClick={() => handleDeleteImage(idx)}>×</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* BLOG TAB */}
                {activeTab === 'blog' && (
                    <div className="tab-content">
                        <div className="form-section glass">
                            <h3>Neuen Blogpost verfassen</h3>
                            <form onSubmit={handleAddPost} className="admin-form">
                                <input required placeholder="Titel" value={postForm.title} onChange={e => setPostForm({ ...postForm, title: e.target.value })} />
                                <input required placeholder="Datum" value={postForm.date} onChange={e => setPostForm({ ...postForm, date: e.target.value })} />
                                <input required placeholder="Bild URL" value={postForm.image} onChange={e => setPostForm({ ...postForm, image: e.target.value })} />
                                <textarea required placeholder="Kurzbeschreibung (Excerpt)" rows="2" value={postForm.excerpt} onChange={e => setPostForm({ ...postForm, excerpt: e.target.value })} />
                                <textarea required placeholder="Inhalt (Kann HTML enthalten)" rows="6" value={postForm.content} onChange={e => setPostForm({ ...postForm, content: e.target.value })} />
                                <button type="submit" className="btn btn-primary">Post Veröffentlichen</button>
                            </form>
                        </div>

                        <div className="list-section">
                            {posts.map(p => (
                                <div key={p.id} className="admin-item glass">
                                    <div className="info">
                                        <h4>{p.title}</h4>
                                        <p style={{ fontSize: '0.8rem', color: '#888' }}>{p.date}</p>
                                    </div>
                                    <button className="btn-delete" onClick={() => handleDeletePost(p.id)}>Löschen</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <style jsx>{`
        .admin-dashboard {
            display: flex;
            min-height: 100vh;
            background: var(--bg-dark);
            color: white;
            padding-top: 80px; /* Navbar height */
        }
        .sidebar {
            width: 250px;
            padding: 2rem;
            border-right: 1px solid var(--glass-border);
            position: fixed;
            height: calc(100vh - 80px);
            left: 0;
            top: 80px;
        }
        .sidebar h2 { margin-bottom: 2rem; color: var(--primary); }
        .sidebar ul li {
            padding: 1rem;
            cursor: pointer;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            color: var(--text-muted);
            font-weight: 500;
        }
        .sidebar ul li:hover, .sidebar ul li.active {
            background: rgba(255, 87, 34, 0.1);
            color: var(--primary);
        }
        .logout-btn { width: 100%; margin-top: auto; position: absolute; bottom: 2rem; left: 0; width: 80%; margin-left: 10%; }

        .content-area {
            margin-left: 250px;
            padding: 3rem;
            width: 100%;
        }
        .content-area h1 { margin-bottom: 2rem; }

        .form-section { padding: 2rem; border-radius: 12px; margin-bottom: 3rem; }
        .admin-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .admin-form input, .admin-form textarea {
            padding: 12px;
            border-radius: 8px;
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--glass-border);
            color: white;
            font-family: inherit;
        }
        .single-row { flex-direction: row; }
        .single-row input { flex: 1; }

        .list-section { display: flex; flex-direction: column; gap: 1rem; }
        .admin-item {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            padding: 1rem;
            border-radius: 12px;
        }
        .thumbnail { width: 60px; height: 60px; object-fit: cover; border-radius: 8px; }
        .info { flex: 1; }
        .btn-delete {
            background: rgba(255,0,0,0.2);
            color: #ff4444;
            border: 1px solid #ff4444;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
        }
        .btn-delete:hover { background: #ff4444; color: white; }

        .gallery-grid-admin {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
        }
        .gallery-thumbnail-wrapper {
            position: relative;
            aspect-ratio: 1;
            border-radius: 12px;
            overflow: hidden;
        }
        .gallery-thumbnail-wrapper img { width: 100%; height: 100%; object-fit: cover; }
        .btn-delete-overlay {
            position: absolute;
            top: 5px;
            right: 5px;
            background: red;
            color: white;
            border: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
        }
      `}</style>
        </div>
    );
}
