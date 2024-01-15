import { ListItem } from '@mui/material';
import { Product } from '../types';

function ProductListItem({ product }: { product: Product }) {
  return (
    <ListItem style={{direction:'rtl'}} key={product.id} sx={{ borderBottom: '1px solid #ccc' }}>
      {product.name} {product.quantity > 1 && '-'} {product.quantity > 1 && '-' && product.quantity}
    </ListItem>
  );
}

export default ProductListItem;
