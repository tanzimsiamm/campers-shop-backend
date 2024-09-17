export type TOrder = {
    userName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    paymentMethod: string;
    orderedProducts: {
        productId: string,
        quantity: number
    }[];
    total: number;
}
