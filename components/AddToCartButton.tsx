'use client';


import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

type Props = {
    product: Product;
}

export default function AddToCartButton({product} : Props) {
    const { addToCart } = useCart();

    return (
        <button onClick={() => addToCart(product)}>
            Додати в кошик
        </button>
    );
}