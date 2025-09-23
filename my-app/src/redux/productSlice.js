import { createSlice } from "@reduxjs/toolkit";
import { productDummyData } from "@/app/assets/assets"; 

const initialState = {
  list: productDummyData, 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
