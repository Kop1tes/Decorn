'use client';

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Header() {
    const {cart} = useCart();

    const totalQuantity = cart.reduce((total, item) => {
        total += item.quantity;

        return total;
    }, 0)

    return (
        <header className="flex">
            <h1>
                <Link href="/">Decorn</Link>
            </h1>
            <Link href="/cart">Кошик ({totalQuantity})</Link>
        </header>
    )
}