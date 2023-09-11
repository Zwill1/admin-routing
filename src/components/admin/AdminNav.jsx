import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AdminNav() {
  const { logout } = useAuth();

  return (
    <>
      <div className="bg-gray-600 text-white p-4">Dashboard Navigation</div>
      <ul className="pr-4">
        <li className="p-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="/app" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="p-4">
          <Link to="/" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
}
