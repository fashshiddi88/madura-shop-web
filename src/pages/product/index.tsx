import React, { useState } from "react";
import Card from "@/components/card/card.module";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout.module";
import { data, DataProduct } from "@/dummy/data";

export default function Product() {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("none");

  const categories = ["All", "Beras", "Minyak", "Gula", "Telur"];
  const sortOptions = [
    "None",
    "Harga Terendah ke Harga Tertinggi",
    "Harga Tertinggi ke Harga Terendah",
  ];

  const filteredProducts = data
    .filter((product) =>
      category === "All" ? true : product.category === category
    )
    .filter((product) =>
      [product.title, product.description, product.price.toString()].some(
        (field) => field.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((low, high) => {
      if (sort === "Harga Terendah ke Harga Tertinggi") {
        return low.price - high.price;
      } else if (sort === "Harga Tertinggi ke Harga Terendah") {
        return high.price - low.price;
      } else {
        return 0;
      }
    });

  return (
    <Layout>
      <div className="w-full h-full flex p-5 bg-red-500 gap-x-2">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md text-black w-1/3"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p2 rounded-md text-black"
        >
          {categories.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p2 rounded-md text-black"
        >
          {sortOptions.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {filteredProducts.map((item: DataProduct) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              category={item.category}
              onClick={() => router.push(`product/${item.id}`)}
            />
          );
        })}
      </div>
    </Layout>
  );
}
