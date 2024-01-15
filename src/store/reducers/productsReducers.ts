import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from '../../types';

interface ProductState {
  products: Product[];
  totalItems: number;
}

const addProduct = (state: ProductState, action: PayloadAction<{ categoryID: number; name: string }>) => {
  const existingProduct = state.products.find((product) => product.name === action.payload.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    state.products.push({
      categoryID: action.payload.categoryID,
      id: Date.now(),
      name: action.payload.name,
      quantity: 1,
    });
  }

  state.totalItems += 1;
};

const finishOrder = (state: ProductState) => {
  state.products = [];
  state.totalItems = 0;
};

export { addProduct, finishOrder };
