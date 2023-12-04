export interface Store {
    _id: string;
    storeName: string;
    nit?: number;
    logo?: string;     // ? Opcional
    mail: string;           // ? Opcional
    phone: number;
    address: string;
    description: string;
}
