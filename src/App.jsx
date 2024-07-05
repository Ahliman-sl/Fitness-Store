import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/Home/Home";
import Shop from "./features/Shop/Shop.jsx";
import Articles from "./features/Articles/Articles.jsx";
import WhoWeAre from "./features/About/WhoWeAre.jsx";
import Cart from "./features/Cart/Cart.jsx";
import Checkout from "./features/Cart/Checkout.jsx";
const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/about",
        element: <WhoWeAre />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
