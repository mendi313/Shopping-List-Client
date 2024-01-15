import { Category, Product } from '../types';

interface GroupedProducts {
  [categoryId: number]: {
    category: Category;
    products: Product[];
    totalQuantity: number;
  };
}

const groupProductsByCategory = (products: Product[], categories: Category[]): GroupedProducts => {
  return products.reduce((grouped, product) => {
    const category = categories.find((category) => category.id === product.categoryID);

    if (category) {
      if (!grouped[category.id]) {
        grouped[category.id] = { category, products: [], totalQuantity: 0 };
      }

      grouped[category.id].products.push(product);
      grouped[category.id].totalQuantity += product.quantity;
    }

    return grouped;
  }, {} as GroupedProducts);
};

export default groupProductsByCategory;
