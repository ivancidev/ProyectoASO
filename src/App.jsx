import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import StartUp from "./pages/StartUp/StartUp.jsx";
import Shares from "./pages/Shares/Shares.jsx";
import Identity from "./pages/Identity/Identity.jsx";
import Users from "./pages/Users/Users.jsx";
import Add from "./pages/Add/Add.jsx";
import Login from "./pages/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "Start-Up",
        element: <StartUp />,
      },
      {
        path: "Shares",
        element: <Shares />,
      },
      {
        path: "Identity",
        element: <Identity />,
      },
      {
        path: "Users",
        element: <Users />,
      },
      {
        path: "Shares/Add",
        element: <Add />,
      },
    ],
  },
]);

const App = () => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <React.StrictMode>
      {storedIsLoggedIn ? (
        <RouterProvider router={router} />
      ) : (
        <Login />
      )}
    </React.StrictMode>
  );
};

export default App;
