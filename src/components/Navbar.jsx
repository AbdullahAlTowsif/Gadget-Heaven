import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto px-5 navbar backdrop-blur-xl bg-[#9538E2] z-50 rounded-t-xl'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
                    >
                        <NavLink className={`text-white hover:font-semibold`}>
                            Home
                        </NavLink>
                        <NavLink className={`text-white hover:font-semibold`}>
                            Statistics
                        </NavLink>
                        <NavLink className={`text-white hover:font-semibold`}>
                            Dashboard
                        </NavLink>
                    </ul>
                </div>
                <Link to='/' className='text-white text-xl font-bold hover:text-black'>
                    Gadget Heaven
                </Link>
            </div>
            <div className='navbar-end hidden lg:flex'>
                <ul className='menu menu-horizontal px-1 gap-8'>
                    <NavLink className={`text-white hover:font-bold`}>
                        Home
                    </NavLink>
                    <NavLink className={`text-white hover:font-bold`}>
                        Statistics
                    </NavLink>
                    <NavLink className={`text-white hover:font-bold`}>
                        Dashboard
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <div className="btn rounded-full text-sm">
                    <BsCart2 />
                </div>
                <div className="btn rounded-full text-sm">
                    <CiHeart />
                </div>
            </div>
        </div>
    )
}



export default Navbar;