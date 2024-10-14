import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TERM from "./term";
import Signup from "./signup";
import ABOUT from "./about";
import PRIVACY from "./privacy";
import UPLOAD from "./upload";
import LOGIN from "./login";
import RESULT from "./result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "term",
    element: <TERM/>,
  },
  {
    path:"signup",
    element:<Signup/>,
  },
  {
    path:"about",
    element:<ABOUT/>,
  },
  {
    path:"privacy",
    element:<PRIVACY/>,
  },
  {
    path:"upload",
    element:<UPLOAD/>,
  },
  
  {
    path:"login",
    element:<LOGIN/>,
  },
  {
    path:"result",
    element:<RESULT/>,
  }
  
  
]);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
