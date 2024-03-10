import "../components/nav.css";
import Logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <a id="logo" href="#">
        <img src={Logo} alt="" />
      </a>

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
        <ul id="nav-list">
          <li>
            <a href="#myurls" className="text-primary">
              My URLs
            </a>
          </li>
          <li>
            <a href="#whyUs">Features </a>
            <i className="bi bi-chevron-down"></i>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#formsection">Analytics</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <Link to={"signin"}>Login</Link>
          </li>
          <li>
            <Link to={"signup"}>Sign up</Link>
          </li>
        </ul>
      </div>
      <div>
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
      </div>
    </nav>
  );
};

export default Nav;
