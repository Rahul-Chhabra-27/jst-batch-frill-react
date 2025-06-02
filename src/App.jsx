import React from "react";

import ReactDOM from "react-dom/client";
import Pet from "./Pet";

// App component using JSX
const App = () => {
  return (
    <div>
      <h1>"Adopt Me!"</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      <Pet name="Sushi" animal="Dog" breed="Shiba Inu" />
    </div>
  )
};
// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
