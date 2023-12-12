export interface Store {
    _id: string;
    storeName: string;
    nit?: number;
    urlLogo?: string;     // ? Opcional
    mail: string;           // ? Opcional
    phone: number;
    address: string;
    description: string;
}
