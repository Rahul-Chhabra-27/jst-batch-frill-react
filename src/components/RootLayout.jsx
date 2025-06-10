import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Link to="/">
        <h1>Adopt Me!</h1>
      </Link>
      <Outlet />
    </div>
  );
};

export default RootLayout;
