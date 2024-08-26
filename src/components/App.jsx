import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import AppLayout from "./AppLayout/AppLayout";
import Error from "./Error/Error";
import "./App.css";
import Menu from "./Menu/Menu";
import { MenuProvider } from "../contexts/MenuContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: (
          <MenuProvider>
            <Menu />
          </MenuProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
