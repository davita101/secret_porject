import { Link } from 'react-router-dom';
import image1 from "../assets/logo.png";

const Navbar = () => {
    return (
        <section className="h-20 bg-gray-200 flex items-center justify-between fixed w-full z-50 shadow-2xl">
            <div className="h-full w-1/4 flex items-center justify-center max-[700px]:pl-10">
                <img src={image1} alt="GOA logo" className="h-2/4 rounded-full pointer-events-none" />
                <Link to="/">
                <p className="pl-4 font-bold text-2xl cursor-pointer max-[600px]:text-xs">GOA <span className="text-green-800">Website</span></p>
            </Link>
            </div>

            <div className="h-full w-1/4 flex items-center justify-center max-[1200px]:w-1/3 max-[900px]:w-1/2">
                <Link to="/register">
                    <span className="text-2xl font-bold text-gray-300 pt-2 pb-2 pl-6 pr-6 mr-4 bg-green-800 rounded-3xl cursor-pointer hover:bg-gradient-to-t from-green-900 to-green-900 transition-all duration-500 ease-in-out flex justify-center items-center max-[900px]:text-base max-[600px]:text-xs max-[600px]:pt-1 max-[600px]:pb-1 max-[600px]:pl-2 max-[600px]:pr-2">Register</span>
                </Link>
                <Link to="/login">
                    <span className="text-2xl font-bold text-gray-300 pt-2 pb-2 pl-6 pr-6 bg-green-800 rounded-3xl cursor-pointer hover:bg-gradient-to-t from-green-900 to-green-900 transition-all duration-300 ease-in-out flex justify-center items-center max-[900px]:text-base max-[600px]:text-xs max-[600px]:pt-1 max-[600px]:pb-1 max-[600px]:pl-2 max-[600px]:pr-2">Log in</span>
                </Link>
            </div>
        </section>
    )
}

export default Navbar;