import backImage from "../assets/banner.jpg";

const BackImage = () => {
    return (
        <div className="relative"> {/* Ensures the parent has relative positioning and a height */}
            <div className="lg:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <img
                    className="lg:h-[563px] object-cover rounded-2xl p-2 border border-white"
                    src={backImage}
                    alt=""
                />
            </div>
        </div>
    );
};

export default BackImage;
