import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const storedCollection = JSON.parse(localStorage.getItem("collection"));

const initialState = {
  items: Array.isArray(storedCollection) ? storedCollection : [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        console.log("Added to collection");
      } else {
        // console.log("Item already in collection");
      }
    },

    removerCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedTost: () => {
      toast("add To collection ✅ ", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToTost: () => {
      toast.error("Removed From collection ❌ ", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const { addCollection, addedTost, removeToTost, removerCollection, clearCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
