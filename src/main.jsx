import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage.jsx';
import App from './App';
import Login from './Components/Home/Login/Login';
import SignUp from './Components/Home/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import AddJeweller from './Components/AddJewellery/AddJewellery';
import AllJewellery from './Components/AllJewellery/AllJewellery';
import MyJewellery from './Components/MyJewellery/MyJewellery';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/SignUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/AddJeweller',
        element: <AddJeweller></AddJeweller>
      },
      {
        path: '/AllJewellers',
        element: <AllJewellery></AllJewellery>
      },
      {
        path: '/myJewellers',
        element: <MyJewellery></MyJewellery>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
     

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
