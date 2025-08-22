import React from 'react';
import './index.css';
import {Home} from "./pages/Home";
import { createRoot } from 'react-dom/client';
import {Product } from "./pages/Product";
import {Layout} from "./Layouts/Layout";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
  {
    path: "/",
      element: <Home />,
  },
{
  path: "/product/:id",
    element: <Product />,
},
]
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
