'use client';
import React from "react";

export default function CheckoutPage() {
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <main>
            <h1>Оформити заказ</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Ім'я
                    <input
                        type="text"
                        name="name"
                    />
                </label>

                <label>
                    Номер телефону
                    <input
                        type="tel"
                        name="phone"
                    />
                </label>

                <button type="submit">Підтвердити замовлення</button>
            </form>
        </main>
    )
}