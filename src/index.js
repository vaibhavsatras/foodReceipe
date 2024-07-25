import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from './Components/pageNotFound';
import Home from './Pages/home';
import Recipies from './Pages/recipies';
import Catageory from './Components/catageory';
import SearchMenu from './Components/searchMenu';
import Product from './Components/product';
import Aboutus from './Components/aboutus';
import Contactus from './Components/contactus';
import Resources from './Components/resources';
import SignUp from './Components/signUp';
import SignIn from './Components/signIn';
import ForgotPassword from './Components/forgotPassword';
import Cookies from 'js-cookie'


const  router = createBrowserRouter([

  {
    path : "/",
    element: <App/>,

    children: [
      
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/About',
        element: <Aboutus/>
      },
      {
        path:'*',
        element: <PageNotFound/>
      },
      {
        path: '/Receipes',
        element: <Recipies/>
      },
      {
        path: '/Contact',
        element: <Contactus/>
      },
      {
        path: '/catageory/:cat',
        element: <Catageory/>
      },
      {
        path: '/search',
        element: <SearchMenu/>
      },
      {
        path: 'product/:id',
        element: <Product/>,
        loader: (({params})=> fetch(`http://localhost:8000/product/${params.id}`,{

          headers:{

            authorization: JSON.parse(Cookies.get('token'))
  
          },

        }))
      },
      {
        path:'/resourses',
        element:<Resources/>
      },
      {
        path:'/signUp',
        element: <SignUp/>
      },
      {
        path:'/signIn',
        element: <SignIn/>
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword/>
      }

    ]

  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));

AOS.init();

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


