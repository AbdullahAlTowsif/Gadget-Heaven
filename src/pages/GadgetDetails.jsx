import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishlist } from "../utils";

const GadgetDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);

    const [gadget, setGadget] = useState({})
    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id == id)
        setGadget(singleData)
    }, [data, id]);

    // Handle Cart Button
    const handleCart = (gadget) => {
        addToCart(gadget)
    }
    // Handle Wishlist
    const handleWishlist = (gadget) => {
        addToWishlist(gadget)
    }

    return (
        <div className="min-h-screen">
            <div className="relative bg-[#9538E2] min-h-[400px]">
                {/* Header Section */}
                <div className="absolute top-0 left-0 w-full h-[300px] bg-[#9538E2] rounded-b-3xl flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">Product Details</h1>
                    <p className="text-white text-center mt-4 max-w-3xl">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>

                {/* Product Details Card */}
                <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-xl shadow-xl p-8 flex flex-wrap items-start">
                    {/* Product Image */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-[250px] h-[250px] bg-gray-200 rounded-xl">
                            <img src={gadget.product_image} alt="" />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-8">
                        <h2 className="text-2xl font-bold text-gray-800">{gadget.product_title}</h2>
                        <p className="text-xl font-semibold text-green-600 mt-2">Price: ${gadget.price}</p>
                        <p className="bg-green-100 text-green-700 inline-block px-4 py-1 rounded-full mt-2">{gadget.availability ? `In Stock` : `Out of Stock`}</p>
                        <p className="text-gray-600 mt-4">
                            {gadget.description}
                        </p>

                        {/* Specifications */}
                        <h3 className="text-lg font-bold text-gray-800 mt-6">Specification:</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            {
                                gadget.Specification && gadget.Specification.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>

                        {/* Rating and Buttons */}
                        <h3 className="text-lg font-bold text-gray-800 mt-6">Rating</h3>
                        <div className="mt-2 flex items-center">
                            <ReactStars
                                count={5}                 // Total stars
                                value={gadget.rating || 0} // Rating value from gadget data
                                size={24}                 // Size of stars
                                isHalf={true}             // Allow half-stars
                                edit={false}              // Read-only
                                activeColor="#ffd700"     // Active star color
                            />
                            <span className="ml-4 text-gray-600 text-lg">
                                {gadget.rating ? gadget.rating.toFixed(1) : "No Rating"}
                            </span>
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <button onClick={()=> handleCart(gadget)} className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 flex justify-center items-center">
                                Add To Cart <BsCart2 />
                            </button>
                            <div onClick={()=> handleWishlist(gadget)} className="btn rounded-full text-sm">
                                <CiHeart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
