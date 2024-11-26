import { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../utils";
import DashboardCards from "../components/DashboardCards";
import WishlistCards from "../components/WishlistCards";
import DashCardHeading from "../components/DashCardHeading";
import WishCardHeading from "../components/WishCardHeading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import GroupPic from "../assets/Group.png"
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const [gadget, setGadget] = useState([])

    let sum = 0
    gadget.map((item) => (
        sum = sum + item.price
    ))

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const carts = getAllCarts()
        setGadget(carts)
    }, [])

    const handleSort = () => {
        const sorted = [...gadget].sort((a, b) => b.price - a.price);
        toast.success("Sorted Successfully!");
        setGadget(sorted);
    };

    // handle purchase
    const handlePurchase = () => {
        setIsModalOpen(true)
        removeCart()
    }

    // close modal and navigate to home
    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate("/");
    }

    const [isActive, setIsActive] = useState({
        status: true,
        check: 'cart'
    })

    const handleIsActive = (check) => {
        if (check === 'cart') {
            setIsActive({
                status: true,
                check: 'cart'
            })
        }
        else {
            setIsActive({
                status: false,
                check: 'wishlist'
            })
        }
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] min-h-[300px] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white">Dashboard</h1>
                <p className="text-white text-center mt-4 max-w-3xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-4">
                    <button onClick={() => handleIsActive('cart')} className={`${isActive.status ? 'btn active bg-white border border-purple-700 rounded-full' : 'btn'}`}>Cart</button>
                    <button onClick={() => handleIsActive('wishlist')} className={`${isActive.status ? 'btn' : 'btn active rounded-full'}`}>Wishlist</button>
                </div>
            </div>

            {/* Dynamic Data */}
            <div>
                {
                    isActive.status ? <DashCardHeading gadget={gadget} handleSort={handleSort} handlePurchase={handlePurchase}></DashCardHeading> : <WishCardHeading></WishCardHeading>
                }
                {
                    gadget.map((gadget, i) => (
                        isActive.status ? <DashboardCards key={i} gadget={gadget}></DashboardCards> : <WishlistCards key={i} gadget={gadget}></WishlistCards>
                    ))
                }
            </div>
            {/* Modal */}
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <div className="flex flex-col justify-center items-center space-y-5">
                        <img src={GroupPic} alt="" />
                        <h2 className="text-2xl font-bold">Payment Successfull!</h2>
                        <p>Thanks for purchasing.</p>
                        <p>Total: {sum}</p>
                        <button onClick={handleCloseModal} className="btn bg-purple-600 text-white mt-4">
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;