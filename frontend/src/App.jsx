import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function CommonElement() {
  return (
    <>
      <Navbar />
      <Outlet />
      <section className="admin-footer">
        <Footer />
      </section>
    </>
  );
}

export default CommonElement;
