import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import "./index.css";
import Login from "./pages/login.tsx";
import Order from "./pages/order.tsx";
import Goods from "./pages/goods.tsx";
import Tour from "./pages/tour.tsx";
import Local from "./pages/local.tsx";
import LocalOffer from "./pages/local_offer.tsx";
import Push from "./pages/push.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/order", element: <Order /> },
      { path: "/goods", element: <Goods /> },
      { path: "/tour", element: <Tour /> },
      { path: "/local", element: <Local /> },
      { path: "/local_offer", element: <LocalOffer /> },
      { path: "/push", element: <Push /> },
    ],
  },
]);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
);
