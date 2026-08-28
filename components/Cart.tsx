'use client';

import { useCart } from "@/context/CartContext"

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useCart();

    const total = cart.reduce((total, item) => {
        total += item.product.price * item.quantity;

        return total;
    }, 0);

    return (
        <section>
            <h2>Корзина</h2>
            {cart.map((item) => (
                <div key={item.product.id}>
                    <div>{item.product.title}</div>
                    <div>Кiлькiсть: {item.quantity}</div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => addToCart(item.product)}
                            className="bg-black text-white px-3 py-1 rounded cursor-pointer"
                        >
                            +
                        </button>
                        <button
                            onClick={() => removeFromCart(item.product)}
                            className="bg-black text-white px-3 py-1 rounded cursor-pointer"
                        >
                            -
                        </button>
                    </div>
                    <div>Разом: {total} ₴</div>
                </div>
            ))}
        </section>
    );
};