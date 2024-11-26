import { useEffect, useState } from "react";
import { getAllCarts } from "../utils";
import DashboardCards from "../components/DashboardCards";
import WishlistCards from "../components/WishlistCards";

const Dashboard = () => {

    const [gadget, setGadget] = useState([])
    useEffect(()=> {
        const carts = getAllCarts()
        setGadget(carts)
    }, [])

    const [isActive, setIsActive] = useState({
        status: true,
        check: 'cart'
    })

    const handleIsActive = (check) => {
        if(check === 'cart'){
            setIsActive({
                status: true,
                check: 'cart'
            })
        }
        else{
            setIsActive({
                status: false,
                check: 'wishlist'
            })
        }
    }

    return (
        <div>
            <div className="bg-[#9538E2] min-h-[300px] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white">Dashboard</h1>
                <p className="text-white text-center mt-4 max-w-3xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-4">
                    <button onClick={()=> handleIsActive('cart')} className="btn mr-6 rounded-full text-[#9538E2]">Cart</button>
                    <button onClick={()=> handleIsActive('wishlist')} className="btn rounded-full bg-[#9538E2] text-white">Wishlist</button>
                </div>
            </div>
        
            {/* Dynamic Data */}
            <div>
                {
                    gadget.map((gadget, i) => (
                        isActive.status ? <DashboardCards key={i} gadget={gadget}></DashboardCards> : <WishlistCards key={i} gadget={gadget}></WishlistCards>
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;