import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/")
    }
    return (
        <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-5xl text-purple-800">404</h1>
            <h2 className="text-3xl">Oops! Page Not Found</h2>
            <p className="text-xl text-purple-800">
                The page you arere looking for doesnt exist or has been moved.
                Lets get you back on track.
            </p>
            <button className="btn" onClick={handleGoHome}>
                Go to Homepage
            </button>
        </div>
    );
};

export default Error;