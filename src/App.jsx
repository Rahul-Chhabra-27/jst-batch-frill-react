import React from "react";

import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./Details";
import RootLayout from "./RootLayout";
import NotFound from "./ErrorPage";

// App component using JSX
// Root Component
const App = () => {
  // const route = createBrowserRouter([
  //   {
  //     path: "/",

  //     element: (
  //       <div>
  //         <header>
  //           <h1>"Adopt Me!"</h1>
  //         </header>
  //         <SearchParams></SearchParams>
  //       </div>
  //     ),
  //   },
  //   { path: "/details/:id", element: <Details></Details> },
  // ]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <RootLayout />,
      children: [
        { path: "", element: <SearchParams /> },
        {
          path: "pets",
          element: <Details />,
        },
        {
          path: "pets/:id",
          element: <Details />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};
// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
