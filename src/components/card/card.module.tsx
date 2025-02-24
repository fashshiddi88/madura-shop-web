import { DataProduct } from "@/dummy/data";
import React from "react";

export default function Card({
  id,
  title,
  description,
  image,
  price,
  category,
  onClick,
}: DataProduct) {
  return (
    <div
      id={id}
      className="border p-4 bg-slate-50 rounded shadow-sm hover:bg-slate-200 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={
          image !== ""
            ? image
            : "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
        }
        alt={title}
        className="w-full h-400 object-cover mb-2 rounded"
      />
      <div className="flex flex-col gap-y-5">
        <h1 className="text-lg text-zinc-900 font-semibold">{title}</h1>
        <span className="text-zinc-600">{description}</span>
        <span className="text-rose-500 font-bold">Rp{price}</span>
        <span className="text-sm text-zinc-600">Category: {category}</span>
      </div>
    </div>
  );
}
