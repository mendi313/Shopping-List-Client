import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import { RootState } from '../store';
import ProductListItem from './ProductListItem';
import groupProductsByCategory from '../lib/groupProductsByCategory';
import { Product } from '../types';
import '../style/Products.css';

function ProductsByCategory() {
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.categories.categories);

  // Group products by category and calculate total quantity for each category
  const groupedProducts = groupProductsByCategory(products, categories);

  return (
    <div className="products-list">
      {Object.values(groupedProducts).map((group) => (
        <div key={group.category.id} style={{ marginBottom: '20px' }}>
          <h2>
            {group.category.name} - {group.totalQuantity}
          </h2>
          <List>
            {group.products.map((product: Product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </List>
        </div>
      ))}
    </div>
  );
}

export default ProductsByCategory;
