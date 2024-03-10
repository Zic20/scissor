import { ToastContainer } from "react-toastify";
import "./App.css";
import { AuthUserProvider } from "./firebase/auth";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
