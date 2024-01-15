import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { FormData, Product } from '../types';
import { finishOrder } from '../store/slices/productsSlice';
import axios from 'axios';
import { RootState } from '../store';
import ProductListItem from './ProductListItem';

function OrderSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products: Product[] = useSelector((state: RootState) => state.products.products);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/orders', {
      ...formData,
      products,
    });

    setFormData({
      fullName: '',
      address: '',
      email: '',
    });
    dispatch(finishOrder());
    navigate('/order-success');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2 dir="rtl">סיכום הזמנה</h2>
      <List>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </List>
      <form dir="rtl" onSubmit={handleConfirmOrder} style={{ marginTop: '20px' }}>
        <TextField
          label="שם פרטי ומשפחה"
          variant="outlined"
          fullWidth
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="כתובת מלאה"
          variant="outlined"
          fullWidth
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          style={{ marginTop: '10px' }}
        />
        <TextField
          label="מייל"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ marginTop: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          אשר הזמנה
        </Button>
      </form>
    </div>
  );
}

export default OrderSummary;
