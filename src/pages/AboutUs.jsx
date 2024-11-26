import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] min-h-[200px] flex flex-col justify-center items-center space-y-5 p-5">
                <h1 className="text-4xl font-bold text-white">About Us</h1>
                <p className="text-white text-center mt-4 max-w-3xl">Welcome to Gadget Heaven, where passion meets innovation! We are dedicated to bringing you the latest and greatest in specific industry or niche, helping you stay ahead in this fast-paced world.</p>
                <h1 className="text-4xl font-bold text-white">Our Mission</h1>
                <p className="text-white text-center mt-4 max-w-3xl">Our mission is to make industry-specific aspect accessible and hassle-free for everyone. We are committed to delivering innovative solutions that cater to your needs, save you time, and elevate your lifestyle.</p>
                <h1 className="text-4xl font-bold text-white">Why Choose Us?</h1>
                <ul>
                    <li className="text-white text-center mt-4 max-w-3xl">Quality Assurance: We meticulously select and test our offerings to ensure they meet the highest standards.</li>
                    <li className="text-white text-center mt-4 max-w-3xl">Customer-Centric: Your satisfaction drives everything we do, and we are here to support you every step of the way.</li>
                    <li className="text-white text-center mt-4 max-w-3xl">Innovation & Trends: We stay ahead of the curve to bring you the newest and most exciting products.</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold text-black text-center mt-5">Thank you for being a part of our journey. Lets explore and create something extraordinary together!</h2>
        </div>
    );
};

export default AboutUs;