export interface Cart {
    items: Array<CartItem>
}

export interface CartItem {
    id: string;
    urlImage: string;
    name: string;
    price: number;
    quantity: number;
}
