import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import "./index.css";
import Login from "./pages/login.tsx";
import Order from "./pages/order.tsx";


const router = createBrowserRouter([
  {
     path: "/",
    element: <App />,
     children: [
      { path: "/", element: <Login /> },
      { path: "/order", element: <Order /> },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={ router}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </RouterProvider>
  
);

