import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategories as fetchCategoriesReducer } from '../reducers/categoriesReducers';
import { Category } from '../../types';

const initialState = {
  categories: [] as Category[],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesReducer.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
export { fetchCategoriesReducer as fetchCategories };
