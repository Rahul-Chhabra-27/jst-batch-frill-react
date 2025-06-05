import React from "react";

import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PetDetails from "./PetDetails";
import RootLayout from "./RootLayout";
import Details from './Details'
// App component using JSX
// Root Component

const App = () => {
  // localhost:1234/pets/2  ==> give me the information about pet with id 2
  const router = createBrowserRouter([
    { 
      path:"/",
      element:<RootLayout />,
      children: [
        {path:"",element:<SearchParams></SearchParams> },
        {path:"/pets", element:<Details></Details>},
        {path:"/pets/:id", element:<PetDetails />}
      ]
     }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
