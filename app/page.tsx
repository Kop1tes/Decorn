'use client';

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { cart } = useCart();

  console.log(cart);

  return (
    <main>
      <h1>Topper Shop</h1>

      {
        products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
      }
      
    </main>
  );
}