import backImage from "../assets/banner.jpg"

const BackImage = () => {
    return (
        <div className="lg:absolute top-96 left-56 flex justify-center">
            <img className="lg:w-[1062px] lg:h-[563px] object-cover rounded-2xl p-2 border border-white" src={backImage} alt="" />
        </div>
    );
};

export default BackImage;