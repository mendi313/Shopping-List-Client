import { createSlice } from '@reduxjs/toolkit';
import { addProduct as addProductReducer, finishOrder as finishOrderReducer } from '../reducers/productsReducers';
import { Product } from '../../types';

const initialState = {
  products: [] as Product[],
  totalItems: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: addProductReducer,
    finishOrder: finishOrderReducer
  },
});

export const { addProduct, finishOrder } = productsSlice.actions;
export default productsSlice.reducer;
