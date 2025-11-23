import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Orders from './Orders/Orders.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';



const router = createBrowserRouter([
  {
    path: "/",
 Component: Root,
 children: [
  {
    index: true,
    Component: Home
  },
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'register',
    Component: Register
  },
  {
    path: 'orders',
    element: <PrivateRoutes><Orders /></PrivateRoutes>
  },
 {
  path: 'profiles',
  element: <PrivateRoutes><div><h2>Profile</h2></div></PrivateRoutes>
 },
 {
   path: 'dashboard',
   element: <PrivateRoutes><Dashboard /></PrivateRoutes>
 }
 ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  

  </StrictMode>,
)
