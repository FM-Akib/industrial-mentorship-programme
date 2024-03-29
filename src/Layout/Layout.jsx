import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <div className=" bg-[#F8FAFC]">
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Layout;