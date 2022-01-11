import { ProductType } from "@/config/types"
import { UPDATE_CART, UPDATE_TOTAL_VALUE } from "./actions.config"

export function updateCart(obj: ProductType) {
    return {
        type: UPDATE_CART,
        payload: obj
    }
}

export function updateTotalValue(value: number) {
    return {
        type: UPDATE_TOTAL_VALUE,
        payload: value
    }
}