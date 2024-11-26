import { SlEqualizer } from "react-icons/sl";

const DashCardHeading = ({gadget, handleSort, handlePurchase}) => {
    console.log(gadget)
    let sum = 0
    gadget.map((item) => (
        sum = sum + item.price
    ))
    // console.log(sum.toFixed(2))
    
    return (
        <div>
            <div className="flex justify-between items-center mt-12">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="flex space-x-4">
                    <h1 className="font-bold text-2xl">Total Cost: {sum.toFixed(2)}</h1>
                    <button onClick={handleSort} className="btn flex text-[#9538E2] bg-white rounded-full">Sort by Price <SlEqualizer /> </button>
                    <button onClick={handlePurchase} className="btn bg-[#9538E2] text-white rounded-full">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default DashCardHeading;