import "../components/nav.css";
import Logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import HomeNavItems from "./HomeNavItems";
import { LogOut } from "lucide-react";
import { Logout } from "@mui/icons-material";

const Nav = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();

  return (
    <nav className="nav">
      <img src={Logo} alt="" />

      <div className="toggle">
        <input
          type="checkbox"
          name=""
          id="nav-toggle"
          className="navigation__checkbox"
        />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        {!authUser && <HomeNavItems />}
        {authUser && (
          <ul id="nav-list">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        )}
      </div>
      <div>
        {!authUser && (
          <>
            <Button
              onclick={() => {
                navigate("signin");
              }}
              className="btn-secondary"
            >
              Login
            </Button>
            <Button
              onclick={() => {
                navigate("signup");
              }}
              className="btn-primary"
            >
              Try for free
            </Button>
          </>
        )}

        {authUser && (
          <Button
            onclick={() => {
              navigate("signin");
            }}
            className="btn-primary flex "
          >
            Login
            <LogOut className="ml-3" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
