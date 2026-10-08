import React from "react";
import { Outlet } from "react-router-dom";
import Navvar from "../componets/Shared/Navvar";
import Footer from "../componets/Shared/Footer";

const Mainlayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navvar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Mainlayout;