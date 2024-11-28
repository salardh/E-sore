
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from './Comoponents/Layout/Layout';
import Productcarts from "./Comoponents/Product/Product_carts";
import Signin from "./Comoponents/outh/Signin/Signin";
import Signup from "./Comoponents/outh/Signup/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Comoponents/Errorpage/ErrorPage";





function App() {
  const router = createBrowserRouter([
    {
path:"/",
element: <Layout Productcarts={Productcarts}/> ,errorElement:<ErrorPage/>
    },
    {
      children:[
        {
          path:"/Signin",
          element: <Signin/>,
        },
        {
          path:"/Signup",
          element: <Signup/>,
        },
        {
          path:"/Productcarts",
          element: <Productcarts/>,
        },
      ]
    }
  ])
  return (
    <div >
{/*   
   < Productcarts/>
   <Signin/>
   < Signup/> */}
   <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
