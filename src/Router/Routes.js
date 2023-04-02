import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import CheakOut from "../Pages/CheakOut/CheakOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/login/Login";
import SignIn from "../Pages/Singin/SignIn";
import Order from "../Pages/Order/Order";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/signin",
            element: <SignIn></SignIn>
        },
        {
            path:"/cheakout/:id",
            element: <CheakOut></CheakOut>,
            loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:"/orders",
            element: <Order></Order>,
        },
      ]
    },
  ]);

  export default router;