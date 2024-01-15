import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProductForm from './ProductForm';
import TotalItems from './TotalItems';
import Categories from './Categories';
import { addProduct } from '../store/slices/productsSlice';
import ProductsByCategory from './ProductsByCategory';
import { RootState } from '../store';

function ShoppingList() {
  const products = useSelector((state: RootState) => state.products.products);
  const [chosenCategoryID, setChosenCategoryID] = useState<number | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinishOrder = () => {
    navigate('/order-summary');
  };

  const handleAddProduct = (productName: string) => {
    if (productName.trim() !== '' && chosenCategoryID) {
      dispatch(addProduct({ categoryID: chosenCategoryID, name: productName }));
    }
  };

  return (
    <div>
      <TotalItems />
      <Button disabled={products.length > 0 ? false : true} variant="contained" color="primary" onClick={handleFinishOrder}>
        סיים הזמנה
      </Button>
      <div style={{ maxWidth: '350px', margin: 'auto' }}>
        <h1>רשימת קניות</h1>
        <Categories setChosenCategoryID={setChosenCategoryID} />
        <ProductForm chosenCategoryID={chosenCategoryID} handleAddProduct={handleAddProduct} />
      </div>
      {products.length ? <h3 style={{ color: 'blueviolet', textAlign: 'center' }}>יש לאסוף מוצרים אלו במחלקות המתאימות</h3> : ''}
      <ProductsByCategory />
    </div>
  );
}

export default ShoppingList;
