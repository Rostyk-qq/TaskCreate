import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserReducer } from "./Reducers/UserReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({

})

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootSelector = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch