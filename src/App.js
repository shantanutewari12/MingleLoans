import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProduct from '../src/components/Product/AddProduct';
import EditProduct from '../src/components/Product/EditProduct';
import ViewProduct from '../src/components/Product/ViewProduct';
import ProductList from '../src/components/Product/ProductList';
import ReportPage from '../src/components/Product/ReportPage'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:productId" element={<EditProduct />} />
            <Route path="view-product/:productId" element={<ViewProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="report-page" element={<ReportPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;