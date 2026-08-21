'use client';

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

type Props = {
    product: Product;
};

export default function ProductCard({ product } : Props) {
    const { addToCart } = useCart();

    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.code}</p>
            <p>Розмiр: {product.size}</p>
            <p>Категорiя: {product.category}</p>
            <p>Цiна: {product.price} грн.</p>

            <button
                onClick={()=> addToCart(product)}
                className="bg-red-300 text-white p-4 cursor-pointer"
            >
                Додати в корзину
            </button>
        </div>
    );
}