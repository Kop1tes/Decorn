'use client';

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main>
      <h1>Topper Shop</h1>

      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
      
     <Cart />
      
    </main>
  );
}