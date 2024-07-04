import { GetNewArrials } from "@/queries";
import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const data = await GetNewArrials();
  const products = data?.products;

  return (
    <section className="py-16">
      <div className="container text-center">
        <h1 className="text-5xl font-bold text-center text-black mb-14">
          NEW ARRIVALS
        </h1>

        <div className="grid grid-cols-4 gap-4 text-left">
          {products.map((product: Product) => (
            <Link href={`/new-arrivals/${product.id}`} key={product.id}>
              <div className="card shadow-xl">
                <figure className="w-full bg-base-200">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl leading-7 h-10">
                    {product.title}
                  </h2>
                  <div className="rating my-2">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                    />
                    {/* <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                    /> */}
                    <p className="text-xl"> {product.rating}/5</p>
                  </div>

                  <p className="text-2xl font-bold">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
