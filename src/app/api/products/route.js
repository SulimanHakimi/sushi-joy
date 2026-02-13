export async function GET(request) {
    const products = [
        { id: 1, name: 'Lachs Nigiri', price: 8.99, stock: 'Verfügbar' },
        { id: 2, name: 'Thunfisch Maki', price: 12.49, stock: 'Verfügbar' },
        // mehr Daten...
    ];

    return new Response(JSON.stringify(products), {
        headers: { 'Content-Type': 'application/json' },
    });
}
