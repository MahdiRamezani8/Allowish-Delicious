import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { MenuProvider } from "../../contexts/MenuContext";
import { NavProvider } from "../../contexts/NavContext";
function AppLayout() {
  return (
    <>
      <MenuProvider>
        <NavProvider>
          <Nav />
          <Outlet />
        </NavProvider>
        <Footer />
      </MenuProvider>
    </>
  );
}

export default AppLayout;
