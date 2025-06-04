import { Outlet } from "react-router-dom";


const RootLayout = () => {
  console.log("hello")
    return (
      <div>
        <header>
          <h1>"Adopt Me!"</h1>
          <Outlet/>
        </header>
      </div>
    );
}

export default RootLayout