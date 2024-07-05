import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "../helpers/ScrollToTop.jsx";
import Alert from "./Alert.jsx"; // Alert bileşenini içe aktarın
import WishListAlert from "./WishListAlert.jsx";

function AppLayout() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <main className="pt-[5.5rem]">
        <Alert />
        <WishListAlert />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
