import { User } from "./user";

export interface ResponseAuth {
    ok: boolean;
    msg?: string;
    token?: string;
    userData?: User
}
