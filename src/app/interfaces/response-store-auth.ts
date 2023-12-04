import { Store } from "./store";

export interface ResponseStoreAuth {
    ok: boolean;
    msg?: string;
    token?: string;
    store_id: string
    storeData: Store
}
