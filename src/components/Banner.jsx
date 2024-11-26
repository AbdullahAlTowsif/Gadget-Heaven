const Banner = () => {
    return (
        <div className=" bg-[#9538E2] min-h-[600px] rounded-b-xl flex flex-col items-center">
            <div className="hero-content pt-10 text-center">
                <div className="max-w-3xl flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn rounded-full text-[#9538E2] bg-white">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;