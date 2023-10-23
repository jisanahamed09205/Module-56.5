import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-hnfb6dkm4-jisanahamed09205.vercel.app/coffee'),
    children: [
      {
        path:'/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path:'/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-hnfb6dkm4-jisanahamed09205.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-hnfb6dkm4-jisanahamed09205.vercel.app/user')
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
