import React from "react";
import { useRouter } from "next/router";
import { data } from "@/dummy/data";
import Layout from "@/components/layout/layout.module";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const product = data.find((item) => item.id === id);
  return (
    <Layout>
      <div className="w-screen h-screen flex justify-center items-center p-5">
        {product !== undefined ? (
          <div className="h-1/2 flex bg-slate-200 rounded-md">
            <div className="h-1/2 p-5 rounded-md">
              <img
                src={
                  product?.image !== ""
                    ? product?.image
                    : "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
                }
                alt={product?.title}
                className="w-full h-400 object-cover mb-2 rounded"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-5 p-5">
              <h1 className="text-lg text-zinc-900 font-semibold">
                {product?.title}
              </h1>
              <span className="text-zinc-600">{product?.description}</span>
              <span className="text-rose-500 font-bold">
                Rp{product?.price}
              </span>
              <span className="text-sm text-zinc-600">
                Category: {product?.category}
              </span>
              <button className="p-3 bg-amber-600 text-white rounded-md font-semibold w-40 h-14">
                Beli Sekarang
              </button>
            </div>
          </div>
        ) : (
          <h2>Maaf Produk tidak ada</h2>
        )}
      </div>
    </Layout>
  );
}
