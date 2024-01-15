import { Category } from '../types';

function CategoryOption({ category }: { category: Category}) {
  return (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  );
}

export default CategoryOption;
