import { Helmet } from "react-helmet-async";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] min-h-[200px] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white">Statistics</h1>
                <p className="text-white text-center mt-4 max-w-3xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <h1 className="text-5xl font-bold text-[#9538E2] mt-5 text-center">No Items to Show Here</h1>
        </div>
    );
};

export default Statistics;