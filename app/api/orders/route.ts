export async function POST(request: Request) {
    const data = await request.json();

    console.log(data);

    if (!data.name) {
        return Response.json(
            {
                message: "Немає імені"
            },
            {
                status: 400
            }
        );
    }

    if (!data.phone) {
        return Response.json(
            {
                message: "Немає номера телефону"
            },
            {
                status: 400
            }
        );
    }

    if (!Array.isArray(data.orderItems || data.orderItems.length === 0)) {
        return Response.json(
            {
                message: "Немає товарів"
            },
            {
                status: 400
            }
        );
    }

    if (typeof data.total !== "number" || data.total <= 0) {
        return Response.json(
            {
                message: "Немає суми замовлення"
            },
            {
                status: 400
            }
        );
    }

    return Response.json({
        message: "Замовлення отримано"
    });
}