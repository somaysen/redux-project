import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/conuterSlice'

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export default store