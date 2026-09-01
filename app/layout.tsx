import Header from "@/components/Header";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Topper Shop",
  description: "Продажа топперов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}