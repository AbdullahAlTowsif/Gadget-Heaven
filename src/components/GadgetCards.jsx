import { useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const GadgetCards = ({ gadgets }) => {
    console.log(gadgets);
    const { category } = useParams();
    console.log(category);

    const [gadget, setGadget] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...gadgets].filter(gad => gad.category === category);
            setGadget(filteredByCategory);
        }
        else {
            setGadget(gadgets);
        }
    }, [category, gadgets])
    return (
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {
                gadget.map(gadget => <Cards key={gadget.product_id} gadget={gadget}></Cards>)
            }
        </div>
    );
};

export default GadgetCards;