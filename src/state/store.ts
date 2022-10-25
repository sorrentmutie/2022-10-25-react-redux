import {applyMiddleware, createStore, StoreEnhancer } from "redux";
import reducers from "./action-creators";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(reducers, {}, applyMiddleware(thunk));

function composeWithDevTools(arg0: StoreEnhancer<{ dispatch: unknown; }, {}>) {
    throw new Error("Function not implemented.");
}
