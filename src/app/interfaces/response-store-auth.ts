import { Store } from "./store";

export interface ResponseStoreAuth {
    ok: boolean;
    msg?: string;
    token?: string;
    storeId?: string
    storeData: Store
}
