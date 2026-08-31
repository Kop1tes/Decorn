'use client';

import { Product } from "@/types/product";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

type Props = {
    product: Product;
};

export default function ProductCard({ product } : Props) {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.code}</p>
            <p>Розмiр: {product.size}</p>
            <p>Категорiя: {product.category}</p>
            <p>Цiна: {product.price} грн.</p>

            <Link href={`/products/${product.code}`}>Детальнiше</Link>
            
            <AddToCartButton product={product} />
        </div>
    );
}