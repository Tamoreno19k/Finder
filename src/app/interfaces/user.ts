export interface User {
    _id?: string;
    name?: string;          // ? Opcional
    lastName?: string;
    username: string;
    email?: string;           // ? Opcional
    phone?: number;
    role?: string;
}
