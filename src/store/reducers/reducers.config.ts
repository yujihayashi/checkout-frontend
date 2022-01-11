import { combineReducers } from "redux";
import cartReducer from "@/store/reducers/cart.reducer"

const reducers = combineReducers({
    cart: cartReducer,
})

export default reducers;