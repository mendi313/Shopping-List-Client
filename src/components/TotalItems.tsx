import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { RootState } from '../store';

function TotalItems() {
  const totalItems: number = useSelector((state: RootState) => state.products.totalItems);

  return (
    <Typography variant="h6" gutterBottom>
      סה"כ: {totalItems} מוצרים
    </Typography>
  );
}

export default TotalItems;
