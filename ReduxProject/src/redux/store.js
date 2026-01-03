import {configureStore} from "@reduxjs/toolkit"
import searchReducer from "./features/searchSlice"
import collectionReducer from "./features/collectionSlice"
import authReducer from "./features/auth"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionReducer,
        auth: authReducer,
    },
})