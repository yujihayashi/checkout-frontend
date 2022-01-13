import { ProductType } from "@/config/types";
import { AnyAction } from "redux";
import { UPDATE_CART, UPDATE_TOTAL_VALUE } from "@/store/actions/actions.config";

type Cart = {
    products: ProductType[],
    total: number,
    counter: number
}

const initialState = {
    products: [],
    total: 0,
    counter: 0
}

const reducer = function (state: Cart = initialState, action: AnyAction) {
    switch (action.type) {
        case UPDATE_CART:
            const products = updatingCart(state, action);
            const total = products.reduce((result, cartItem) => result + cartItem.price, 0)
            const counter = products.length;

            return { ...state, products: products, total: total, counter: counter }
        default:
            return state;
    }
}

function updatingCart(state: Cart, action: AnyAction): ProductType[] {
    const currentProducts = state.products;
    const currentPayload = action.payload;

    // verify if this product already is in the cart
    if (currentProducts.find(p => p.id === currentPayload.id))
        return currentProducts;

    // add this product by default
    return [...currentProducts, action.payload]
}

export default reducer;