import { Link } from "react-router-dom";

const Cards = ({ gadget }) => {
    const { product_title, product_image, price, category } = gadget;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <Link to={`/category/${category}`}>
                <figure>
                    <img className="w-72 h-44 object-cover"
                        src={product_image}
                        alt="gadgets" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{`Price: ${price}$`}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary bg-white text-[#9538E2]">Buy Now</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;