import React from "react";

import ReactDOM from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// App component using JSX
// Root Component
const App = () => {
  return (
    <div>
      <h1>"Adopt Me!"</h1>
      <SearchParams />
    </div>
  );
};
// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
