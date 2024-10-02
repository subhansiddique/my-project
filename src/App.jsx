

import Login from "./screens/Login";
// import Signup from "./screens/Signup";
import Loading from "./screens/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/About";
import Donor from "./screens/Donor";
import Find from "./screens/Find";
import Chat from "./screens/chat";





  
    
    export default function App() {
      const router = createBrowserRouter([
        {path: "/",element: <Loading />,}, 
        {path: "/about",element: <About />,}, 
        {path: "/donor",element: <Donor/>,}, 
        {path: "/find",element: <Find />,}, 
        {path: "/chat",element: <Chat />,}, 
    
        { path: "/home",element: <Home />},
       
        {path: "/login",element: <Login />,},
        // {path: "/signup",element: <Signup />,},
      ]);
      return <RouterProvider router={router} />;
    
    }

// https://donateblood.pk/