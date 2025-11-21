import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/dogs">Collection</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
