import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Navbar";

export default function Layouts() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
