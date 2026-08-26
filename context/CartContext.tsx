'use client';

import { createContext, useContext, useState } from "react";
import { Product } from "@/types/product";

type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: Product) {
        setCart((prev) => {
            const existing = prev.find(item => item.product.id === product.id);

            if (existing) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { product, quantity: 1 }];
            }
        });
    }

    function removeFromCart(product: Product) {
        setCart((prev) => {
            const existing = prev.find(item => item.product.id === product.id);

            if (!existing) {
                return prev;
            };

            if (existing.quantity > 1) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prev.filter(item => item.product.id !== product.id);
            };
        });
    }
    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}