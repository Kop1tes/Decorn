import { CartItem } from "@/context/CartContext";

export function calculateCartTotal(cart: CartItem[]) {
    return cart.reduce((total, item) => {
        total += item.product.price * item.quantity;

        return total;
    }, 0);
}