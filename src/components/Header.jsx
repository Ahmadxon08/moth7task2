import { Link } from "react-router-dom";
import "./Header.scss";
import { useAuth } from "./Auth";
const Header = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <div className="header">
        <div className="container">
          <nav>
            <div className="nav_logo">
              <Link to="/">
                <span>Logo</span>
              </Link>
            </div>
            <ul className="nav_bar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/profile">{user ? user.username : "Profile"}</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
};

export default Header;
