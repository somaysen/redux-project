import {configureStore} from "@reduxjs/toolkit"
import searchReducer from "./features/searchSlice"
import collectionReducer from "./features/collectionSlice"
import  authSlice  from "./features/auth"

export const store = configureStore({
    reducer:{
        search: searchReducer,
        collection : collectionReducer,
        auth: authSlice.Reducer
    }
})