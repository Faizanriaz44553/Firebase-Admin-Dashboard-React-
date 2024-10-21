import Login from "../auth/Login";
import Cencel from "../pages/home/Cencel";
import Home from "../pages/home/Home";

export const RoutePage = [
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
