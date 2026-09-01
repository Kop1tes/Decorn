'use client';

import { useCart } from "@/context/CartContext"
import Link from "next/link";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useCart();

    const total = cart.reduce((total, item) => {
        total += item.product.price * item.quantity;

        return total;
    }, 0);

    if (cart.length === 0) {
        return (
            <div>Кошик порожній</div>
        )
    }

    return (
        <section>
            <h2>Кошик</h2>
            {cart.map((item) => (
                <div key={item.product.id}>
                    <div>{item.product.title}</div>
                    <div>Ціна: {item.product.price} ₴</div>
                    <div>Разом за товар: {item.product.price*item.quantity} ₴</div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => addToCart(item.product)}
                            className="bg-black text-white px-3 py-1 rounded cursor-pointer"
                        >
                            +
                        </button>
                        <div>{item.quantity}</div>
                        <button
                            onClick={() => removeFromCart(item.product)}
                            className="bg-black text-white px-3 py-1 rounded cursor-pointer"
                        >
                            -
                        </button>
                    </div>
                </div>
            ))}
            <div>Разом: {total} ₴</div>
            <Link
                href="/checkout"
                className="bg-black text-white px-4 py-2 rounded cursor-pointer"
            >
                Оформити замовлення
            </Link>
        </section>
    );
};