import { ProductType } from "@/config/types"
import { UPDATE_CART } from "./actions.config"

export function updateCart(obj: ProductType) {
    return {
        type: UPDATE_CART,
        payload: obj
    }
}
