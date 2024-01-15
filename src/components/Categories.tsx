import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CategoryOption from './CategoryOption';
import '../style/Categories.css';

function Categories({ setChosenCategoryID }: { setChosenCategoryID: (id: number) => void }) {
  const categories = useSelector((state: RootState) => state.categories.categories);

  const renderCategoryOptions = () => {
    return [
      <option key="default" value="">
        בחר קטגוריה
      </option>,
      ...categories.map((category) => <CategoryOption key={category.id} category={category} />),
    ];
  };

  return (
    <div className="categories">
      <select onChange={(e) => setChosenCategoryID(parseInt(e.target.value))} id="categories" name="categories">
        {renderCategoryOptions()}
      </select>
      <label htmlFor="categories">:בחר קטגוריה</label>
    </div>
  );
}

export default Categories;
