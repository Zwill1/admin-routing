import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>Navs</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}
