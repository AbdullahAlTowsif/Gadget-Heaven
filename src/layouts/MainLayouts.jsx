import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div>
            <Toaster />
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic */}
            <div className="min-h-[calc(100vh-322px)] w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;