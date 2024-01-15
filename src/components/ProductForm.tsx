import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ProductForm({ handleAddProduct, chosenCategoryID }: { handleAddProduct: (name: string) => void, chosenCategoryID: number | null }) {
  const [productName, setProductName] = useState<string>('');
  const [categoryError, setCategoryError] = useState<boolean>(false);

  const handleButtonClick = () => {
    if (chosenCategoryID === null) {
      setCategoryError(true);
    } else {
      setCategoryError(false);

      if (productName.trim() !== '') {
        handleAddProduct(productName);
        setProductName('');
      }
    }
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <TextField
        dir="rtl"
        label="שם המוצר"
        variant="outlined"
        fullWidth
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        error={categoryError}
        helperText={categoryError ? 'בחר קטגוריה לפני הוספת מוצר' : ''}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleButtonClick}
        style={{ marginTop: '10px' }}
      >
        הוסף מוצר
      </Button>
    </div>
  );
}

export default ProductForm;
