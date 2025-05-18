import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      localStorage.setItem(
        "products",
        JSON.stringify([...state.products, action.payload])
      );
      return { ...state, products: [...state.products, action?.payload] };
    },
    decrement: (state, action) => {
      const id = action.payload;
      const newProducts = state.filter((product) => id !== product.id);
      return { ...state, products: newProducts };
    },
    updateProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { increment, decrement, updateProducts ,addToCart } = counterSlice.actions;
export default counterSlice.reducer;
