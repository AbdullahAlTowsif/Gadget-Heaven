import { useLoaderData } from "react-router-dom";
import BackImage from "../components/BackImage";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import GadgetCards from "../components/GadgetCards";

const Home = () => {
    // Access the loaded data (both categories and gadgets)
    const { categories, gadgets } = useLoaderData();

    console.log(categories);
    console.log(gadgets);

    return (
        <div>
            <Banner />
            <BackImage />
            <Heading />
            <div className="flex justify-center gap-2">
                <Categories categories={categories} />
                <GadgetCards gadgets={gadgets} />
            </div>
        </div>
    );
};

export default Home;
