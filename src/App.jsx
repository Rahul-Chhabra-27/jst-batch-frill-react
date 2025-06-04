import React from "react";

import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";


// App component using JSX
// Root Component
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
