import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layouts/Main';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Search from './components/Search/Search';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register.jsx/Register';
import Terms from './components/Terms/Terms';
import AuthProvider from './components/provider/AuthProvider';
import PrivateRoute from './components/routes/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://travel-seba-server.vercel.app/location/1`)
      },
      {
        path: "location/:id",
        element: <Home></Home>,
        loader: ({ params }) => {
          console.log(params.id)
          return fetch(`https://travel-seba-server.vercel.app/location/${params ? params.id : '1'}`)
        }
      },
      {
        path: 'booking',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader: () => fetch(`https://travel-seba-server.vercel.app/location/1`)
      },
      {
        path: 'booking/:id',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader: ({ params }) => fetch(`https://travel-seba-server.vercel.app/location/${params ? params.id : '1'}`)
      },
      {
        path: 'search',
        element: <PrivateRoute><Search></Search></PrivateRoute>,
        loader: () => fetch('https://travel-seba-server.vercel.app/hotel')
      },
      {
        path: 'search/:id',
        element: <PrivateRoute><Search></Search></PrivateRoute>,
        loader: ({ params }) => fetch(`https://travel-seba-server.vercel.app/hotel/${params ? params.id : '1'}`)
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
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
