import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AuthUserProvider } from "./firebase/auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "signup", element: <Signup /> },
  { path: "signin", element: <Login /> },
  { path: "dashboard", element: <Dashboard /> },
]);

function App() {
  return (
    <>
      {/* <Home/> */}
      <AuthUserProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthUserProvider>
    </>
  );
}

export default App;
