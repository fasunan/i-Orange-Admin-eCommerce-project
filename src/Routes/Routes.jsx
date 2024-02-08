import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import ProductsList from '../Components/ProductsList';
import ProductsDetails from '../Components/ProductsDetails';
import CheckOut from '../Components/CheckOut';
import Cart from '../Components/Cart';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AddCustomer from '../AdminDashboard/AdminCustomer/AddCustomer';
import CustomerDetails from '../AdminDashboard/AdminCustomer/CustomerDetails';
import CustomersList from '../AdminDashboard/AdminCustomer/CustomersList';
import AdminProductsList from '../AdminDashboard/AdminProducts/AdminProductsList';
import AdminProductDetails from '../AdminDashboard/AdminProducts/AdminProductDetails';
import AddAdminProduct from '../AdminDashboard/AdminProducts/AddAdminProduct';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/registration', element: <Registration></Registration> },
      { path: '/productsList', element: <ProductsList></ProductsList> },
      { path: '/productsDetails', element: <ProductsDetails></ProductsDetails> },
      { path: '/checkOut', element: <CheckOut></CheckOut> },
      { path: '/cart', element: <Cart></Cart> },
    ]
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      { path: 'addCustomer', element: <AddCustomer></AddCustomer> },
      { path: 'customerDetails', element: <CustomerDetails></CustomerDetails> },
      { path: 'customerList', element: <CustomersList></CustomersList> },
      { path: 'adminProductsList', element: <AdminProductsList></AdminProductsList> },
      { path: 'adminProductsDetails', element: <AdminProductDetails></AdminProductDetails> },
      { path: 'addAdminProducts', element: <AddAdminProduct></AddAdminProduct> }
    ]
  },
]);
