import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { MenuProvider } from "../../contexts/MenuContext";
function AppLayout() {
  return (
    <>
      <MenuProvider>
        <Nav />
      </MenuProvider>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
