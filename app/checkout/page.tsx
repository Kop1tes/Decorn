'use client';

import { useCart } from "@/context/CartContext";
import { calculateCartTotal } from "@/utils/cart";
import React, { useState } from "react";

export default function CheckoutPage() {
    const { cart } = useCart();

    const [errorName, setErrorName] = useState<string | null>(null);
    const [errorPhone, setErrorPhone] = useState<string | null>(null);

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
    
        setErrorName(null);
        setErrorPhone(null);

        const name = formData.get("name");
        const phone = formData.get("phone");
    
        if (!name) {
            setErrorName("Введіть ім'я");
            return;
        }

        if (!phone) {
            setErrorPhone("Введіть номер телефону");
            return;
        }

        const orderItems = cart.map((item) => {
            return {
                code: item.product.code,
                title: item.product.title,
                price: item.product.price,
                quantity: item.quantity
            };
        })

        const total = calculateCartTotal(cart);

        const order = {
            name,
            phone,
            orderItems,
            total
        };
        
        console.log(order)

        const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });

        const data = await response.json();

        console.log(data);
    }

    

    return (
        <main>
            <h1>Оформлення замовлення</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Ім'я

                    {errorName && (
                        <div>{errorName}</div>
                    )}

                    <input
                        className="border border-gray-300 rounded-md px-1 py-1"
                        type="text"
                        name="name"
                        required
                    />
                </label>

                <label>
                    Номер телефону

                    {errorPhone && (
                        <div>{errorPhone}</div>
                    )}

                    <input
                        className="border border-gray-300 rounded-md px-1 py-1"
                        type="tel"
                        name="phone"
                        required
                    />
                </label>

                <button type="submit">Підтвердити замовлення</button>
            </form>
        </main>
    )
}