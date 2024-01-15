import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../../types'; 

const fetchCategories = createAsyncThunk<Category[]>('categories/fetchCategories', async () => {
  const response = await axios.get<Category[]>('http://localhost:3000/categories');
  return response.data;
});

export { fetchCategories };
