import { createStore, combineReducers, AnyAction } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers/reducers.config";

function storeConfig() {
    return createStore(reducers)
}

export type RootState = ReturnType<typeof reducers>

export const storeWrapper = createWrapper(storeConfig);