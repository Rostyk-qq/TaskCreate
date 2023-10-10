import { createStore, combineReducers, applyMiddleware } from "redux";
import { pageControlReducer } from "./Reducers/PageRenderReducer";
import { ArrayUsersReducer } from "./Reducers/ArrayUsers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    pageControlReducer,
    ArrayUsersReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootSelector = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch