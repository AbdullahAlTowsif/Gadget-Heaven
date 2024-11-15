import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    console.log(categories)

    return (
        <div className="w-1/3 bg-gray-100 p-4 rounded-lg flex flex-col space-y-4 my-5">
            {
                categories.map((category, idx) => (
                    <NavLink
                        key={idx}
                        to={`/category/${category.category}`}
                        className={({isActive})=> `w-full py-2 text-center text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300 font-semibold ${isActive ? 'bg-blue-500': ''}`}
                    >
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Categories;