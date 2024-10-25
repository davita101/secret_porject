import backgroundImage from '../assets/background.jpg';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <section className="h-full bg-black flex items-center justify-between max-[1000px]:flex-col" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-8xl text-white p-4 text-center font-MonaSpace text-shadow-glow max-[1750px]:text-6xl max-[1000px]:text-4xl max-[1000px]:pt-8 max-[600px]:pt-12 max-[600px]:text-2xl cursor-pointer">GOA website</h1>
                <p className="text-gray-400 text-2xl font-MonaSpace font-bold text-center text-shadow-glow max-[1750px]:text-xl max-[1500px]:text-sm max-[1200px]:text-xs max-[500px]:text-smallest cursor-pointer">Website for tasks automation and better data visualization</p>
            </div> 

            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-green-800 to-green-500 animate-scale max-[1750px]:h-72 max-[1750px]:w-72 max-[1200px]:h-52 max-[1200px]:w-52 max-[1000px]:h-40 max-[1000px]:w-40" />
                <img src={logo} alt="GOA logo" className="h-1/3 absolute rounded-full hover:shadow-white transition-shadow duration-300 max-[1200px]:h-1/4 pointer-events-none" />
            </div>
        </section>
    )
}

export default Hero;