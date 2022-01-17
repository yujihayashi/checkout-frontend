import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '@/config/store'
import { ProductType } from '@/config/types'

export interface CartState {
    products: ProductType[]
}

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addProduct: (state, action: PayloadAction<ProductType>) => {
            let { products } = state;
            const currentPayload = action.payload;

            // verify if this product already is in the cart
            if (products.find(p => p.id === currentPayload.id))
                return;

            // add this product by default
            state.products = [...products, action.payload]
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((p, i) => i !== action.payload);
        }
    },
})

export const { addProduct, removeProduct } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getProducts = (state: AppState) => state.cart.products
export const getTotal = ({ cart }: AppState) => parseFloat(cart.products.reduce((result, cartItem) => result + cartItem.price, 0).toFixed(2));
export const getCounter = ({ cart }: AppState) => cart.products.length

export default cartSlice.reducer
