import React from "react";

import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Details from "./Details";


// App component using JSX
// Root Component
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">
            <h1>"Adopt Me!"</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)
