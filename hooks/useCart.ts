'use client';

import { Product } from "@/types/product";
import { useState } from "react";

type CartItem = {
    product: Product
    quantity: number;
}

export function useCart() { 
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: Product) {
        setCart((prev) => [
            ...prev,
            { product, quantity: 1 }
        ]);
    }

    return {   cart, addToCart };
}