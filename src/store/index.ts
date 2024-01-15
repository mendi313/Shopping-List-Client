import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';
import { fetchCategories } from './slices/categoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    
  },
})
store.dispatch(fetchCategories());
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch