import { GetNewArrivals } from "@/queries";
import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Rate } from "antd";

export default async function NewArrialsItem() {
  const data: any = await GetNewArrivals();

  const products = data?.slice(0, 4);
  console.log(data);
  // const products = data?.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container text-center">
        <h1 className="text-5xl font-bold text-center text-black mb-14">
          NEW ARRIVALS
        </h1>

        <div className="grid grid-cols-4 gap-4 text-left">
          {products.map((product: Product) => (
            <Link href={`/details/${product.id}`} key={product.id}>
              <div className="card shadow-xl">
                <figure className="w-full bg-base-200">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl leading-7 h-10">
                    {product.name}
                  </h2>
                  <div className="rating my-2 mt-5 flex gap-1">
                    <Rate disabled defaultValue={product.rating} />
                    <p className="text-sm ml-2">{product.rating}/5</p>
                  </div>

                  <p className="text-2xl font-bold">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/new-arrivals">
          <button className="btn bg-white rounded-3xl py-4 px-16 mt-9 hover:bg-black hover:text-white mx-auto">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
}
