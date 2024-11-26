import { IoIosCloseCircleOutline } from "react-icons/io";
import { SlEqualizer } from "react-icons/sl";

const DashboardCards = ({ gadget }) => {
    // console.log(gadget)
    return (
        <div>
            <div className="flex justify-between items-center mt-12">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="flex space-x-4">
                    <h1 className="font-bold text-2xl">Total Cost: 999.99</h1>
                    <button className="btn flex text-[#9538E2] bg-white rounded-full">Sort by Price <SlEqualizer /> </button>
                    <button className="btn bg-[#9538E2] text-white rounded-full">Purchase</button>
                </div>
            </div>
            <div className="flex space-x-5 shadow-lg mt-5 justify-between p-5">
                <div className="flex space-x-4">
                    <img className="w-52 h-32 object-cover" src={gadget.product_image} alt="" />
                    <div className="space-y-2">
                        <h2 className="font-bold text-2xl">{gadget.product_title}</h2>
                        <p className="font-semibold text-gray-500">{gadget.description}</p>
                        <p className="font-semibold text-xl">Price: ${gadget.price}</p>
                    </div>
                </div>
                <div className="text-4xl text-red-500">
                    <IoIosCloseCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default DashboardCards;