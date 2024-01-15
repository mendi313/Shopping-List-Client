import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import OrderSummary from './components/OrderSummary';
import OrderSuccess from './components/OrderSuccess';
import './style/App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
