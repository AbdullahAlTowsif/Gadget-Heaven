import { SlEqualizer } from "react-icons/sl";
import { useEffect, useState } from "react";
import { getAllCarts } from "../utils";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {

    const [gadget, setGadget] = useState([])
    useEffect(()=> {
        const carts = getAllCarts()
        setGadget(carts)
    }, [])
    return (
        <div>
            <div className="bg-[#9538E2] min-h-[300px] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white">Dashboard</h1>
                <p className="text-white text-center mt-4 max-w-3xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-4">
                    <button className="btn mr-6 rounded-full text-[#9538E2]">Cart</button>
                    <button className="btn rounded-full bg-[#9538E2] text-white">Wishlist</button>
                </div>
            </div>
            <div className="flex justify-between items-center mt-12">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="flex space-x-4">
                    <h1 className="font-bold text-2xl">Total Cost: 999.99</h1>
                    <button className="btn flex text-[#9538E2] bg-white rounded-full">Sort by Price <SlEqualizer /> </button>
                    <button className="btn bg-[#9538E2] text-white rounded-full">Purchase</button>
                </div>
            </div>
            {/* Dynamic Data */}
            <div>
                {
                    gadget.map((gadget, i) => (
                        <DashboardCards key={i} gadget={gadget}></DashboardCards>
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;