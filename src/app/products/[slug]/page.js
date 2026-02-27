"use client";

import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
<>
 <div className="container">
  <div className="grid">
    <div className="imageBox">
      <Image src={product.image} alt={product.name} width={600} height={600}/>
    </div>

    <div>
      <h1 className="title">{product.name}</h1>
      <p className="price">${product.price}</p>
      <p className="description">{product.description}</p>

      <p className="servingsTitle">Servings</p>
      <div className="servings">
        <button className="chooseBtn">CHOOSE AN OPTION</button>
        {[1,2,3].map(num => (
          <button key={num} className="optionBtn">{num}</button>
        ))}
      </div>

      <div className="cartRow">
        <input type="number" defaultValue={1} className="quantity" />
        <button className="addToCart">ADD TO CART</button>
      </div>

      <div className="extraBtns">
        <button className="blackBtn">COMPARE</button>
        <button className="outlineBtn">ADD TO WISHLIST</button>
      </div>

      <div className="meta">
        <p><strong>SKU:</strong> {product.sku || "N/A"}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Tags:</strong> {product.tags?.join(", ")}</p>
      </div>
    </div>
  </div>
</div>
<style jsx>{`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 110px;
    background: #fffafa;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  .imageBox {
    background: #f3f3f3;
    border-radius: 6px;
  }

  .title {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #222;
  }

  .price {
    font-size: 28px;
    font-weight: bold;
    color: #e53935;
    margin-bottom: 20px;
  }

  .description {
    color: #666;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .servingsTitle {
    margin-bottom: 10px;
    font-weight: 500;
  }

  .servings {
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
  }

  .optionBtn {
    background: #000;
    color: white;
    width: 55px;
    height: 55px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .optionBtn:hover {
    background: #333;
  }

  .chooseBtn {
    background: #e53935;
    color: white;
    padding: 15px 25px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .cartRow {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }

  .quantity {
    width: 80px;
    padding: 12px;
    border: 1px solid #ccc;
    text-align: center;
  }

  .addToCart {
    background: #aaa;
    color: white;
    padding: 15px 30px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .addToCart:hover {
    background: #888;
  }

  .extraBtns {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }

  .blackBtn {
    background: #000;
    color: white;
    padding: 15px 25px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .outlineBtn {
    background: transparent;
    border: 1px solid #000;
    padding: 15px 25px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .outlineBtn:hover {
    background: #000;
    color: white;
  }

  .meta {
    font-size: 14px;
    color: #777;
    line-height: 1.8;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
</>
  );
}
