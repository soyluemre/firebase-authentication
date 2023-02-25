import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import "../css/navbar.css";
import { logout } from "../auth/firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { giris } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logout Successful");
  };

  return (
    <nav className="navbarr navbar-expand">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-item" to="/firebase-authentication">
            <i className="home-icon fas fa-solid fa-house"></i>
          </Link>
          <div className="dropdown">
            <div
              className="nav-item dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="user-icon fas fa-solid fa-user"></i>
            </div>

            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {!giris && (
                <>
                  <Link className="nav-item dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link className="nav-item dropdown-item" to="/register">
                    Register
                  </Link>
                </>
              )}

              {giris && (
                <Link
                  onClick={handleLogout}
                  className="nav-item dropdown-item"
                  to="/login"
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
