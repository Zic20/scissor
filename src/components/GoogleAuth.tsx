import Button from "./Button";
import GoogleLogo from "../assets/icons/googleLogo.svg";
import { useLocation, useNavigate } from "react-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const GoogleAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Could not authenticate account. Please try again.");
    }
  };
  return (
    <Button
      onclick={onClickHandler}
      className="btn-primary flex mx-auto px-4 rounded-md"
    >
      <img className="mr-2" src={GoogleLogo} alt="" />
      {location.pathname.includes("signup") ? "Sign up" : "Login"}
    </Button>
  );
};

export default GoogleAuth;
