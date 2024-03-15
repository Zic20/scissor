const HomeNavItems = () => {
  return (
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
      {/* <li>
        <Link className="d-none sm:d-block" to={"signin"}>
          Login
        </Link>
      </li>
      <li>
        <Link to={"signup"}>Sign up</Link>
      </li> */}
    </ul>
  );
};

export default HomeNavItems;
