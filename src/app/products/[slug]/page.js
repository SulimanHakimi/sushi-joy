import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const { name, image, price, description, sku, category, tags } = product;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div className="">
            <Image
              src={image}
              alt={name}
              width={600}
              height={600}
              className="object-contain rounded-lg h-96"
            />
          </div>
          <div className="">

            <p className="text-red-500 uppercase text-sm font-semibold tracking-wider">
              {category}
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              {name}
            </h1>
            <p className="text-3xl font-bold text-red-500">
              €{price}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="text-gray-400 text-sm pt-2">
              <p>
                <strong>SKU:</strong> {sku ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}