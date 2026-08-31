import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/data/products";

type Props = {
    params: Promise<{
        code: string;
    }>;
};

export default async function ProductPage({params} : Props) {
    const result = await params;
    const product = products.find(
        item => item.code === result.code
    );
    
    if (!product) {
        return (
            <main>
                <h1>Товар не найден</h1>
            </main>
        )
    }

    return (
        <main>
            <h1>{product.title}</h1>
            <div>{product.code}</div>
            <div>{product.price}</div>
            <div>{product.size}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>

            <AddToCartButton product={product} />
        </main>
    );
}