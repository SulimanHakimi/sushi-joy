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
    <div className=" w-full px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
          <Image
            src={product.image}
            width={800}
            height={500}
            alt={product.name}
            className="rounded-xl object-contain w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full">
            {product.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-green-600">
            {product.price} €
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 pt-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
