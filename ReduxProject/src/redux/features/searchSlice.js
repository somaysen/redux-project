import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:'',
        activeTab:"photos",
        results:[],
        loading: false,
        error:null
    },
    reducers:{
        setQuery(state, action){
            state.query = action.payload
        },
        setActiveTads(state, action){
            state.activeTab = action.payload
        },        
        setLoading(state, action) {
            state.loading = action.payload
            state.error = null
        },
        setError(state, action){
            state.error = action.payload
            state.loading = null
        },
        setResults(state, action){
            state.results = action.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        }
    }
})

export const {setActiveTads,setQuery,setError,setLoading,setResults,clearResults} = searchSlice.actions;
export default searchSlice.reducer;