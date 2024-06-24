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
import AuthProvider from './provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/location/1`)
      },
      // {
      //   path: "location",
      //   element: <Home></Home>,
      //   loader: () => fetch(`http://localhost:5000/location/1`)
      // },
      {
        path: "location/:id",
        element: <Home></Home>,
        loader: ({ params }) => {
          console.log(params.id)
          return fetch(`http://localhost:5000/location/${params ? params.id : '1'}`)
        }
      },
      {
        path: 'booking',
        element: <Booking></Booking>,
        loader: () => fetch(`http://localhost:5000/location/1`)
      },
      {
        path: 'booking/:id',
        element: <Booking></Booking>,
        loader: ({ params }) => fetch(`http://localhost:5000/location/${params ? params.id : '1'}`)
      },
      {
        path: 'search',
        element: <Search></Search>,
        loader: () => fetch('http://localhost:5000/hotel')
      },
      {
        path: 'search/:id',
        element: <Search></Search>,
        loader: ({ params }) => fetch(`http://localhost:5000/hotel/${params ? params.id : '1'}`)
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
