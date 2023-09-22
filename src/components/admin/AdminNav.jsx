import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import HomeIcon from "@mui/icons-material/Home";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from "@mui/icons-material/Logout";

export default function AdminNav() {
  const { logout, user } = useAuth();
  console.log(user);

  return (
    <>
      <div className="bg-gray-600 text-white p-4">Dashboard Navigation</div>
      <ul className="pr-4">
        <li className="px-4 pt-4">
            <img src={user.avatar} />
        </li>
        <li className="px-4">
            Welcome, {user.name}
        </li>
        <li className="p-4">
          <Link to="/" className="nav-link">
            <HomeIcon /> Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="/app" className="nav-link">
            <DashboardCustomizeIcon /> Dashboard
          </Link>
        </li>
        <li className="p-4">
          <Link to="/" className="nav-link" onClick={logout}>
            <LogoutIcon /> Logout
          </Link>
        </li>
        <li className="p-4">
            <button className="bg-gray-500 sm:w-4/12 md:w-10/12 p-2"><DarkModeIcon /> DarkMode</button>
        </li>
      </ul>
    </>
  );
}
