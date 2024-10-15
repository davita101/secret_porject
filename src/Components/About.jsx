import mtskheta from '../assets/Mtskheta.png';

const About = () => {
    return (
        <section className="h-screen max-[800px]:h-for-small">
            <div className="w-full h-full flex items-center justify-center pt-10 max-[800px]:flex-col"> {/* container */}
                <div className="w-1/2 flex items-center justify-center relative mx-auto h-auto overflow-hidden rounded-lg max-[800px]:hidden">
                    <img src={mtskheta} alt="Mtskheta image aerial" className="w-2/5 h-auto relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100 max-[1900px]:w-1/2"/>
                </div>

                <div className="w-1/2 h-full flex flex-col items-start justify-center pt-10 pb-6 max-[800px]:items-center">
                    <div className="relative h-max">
                        <div className="w-14 h-2 bg-black rounded-full absolute top-1/2 -left-10 max-[900px]:w-8 max-[900px]:h-1 max-[900px]:-left-6"></div>
                        <p className="text-3xl font-bold pt-4 pb-4 pl-8 pr-8 bg-green-800 border-4 border-black rounded-full max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 max-[1900px]:text-xl max-[1100px]:text-sm max-[900px]:pt-2 max-[900px]:pb-2 max-[900px]:pl-4 max-[900px]:pr-4 max-[800px]:text-xs max-[800px]:pt-1 max-[800px]:pb-1 max-[800px]:pl-2 max-[800px]:pr-2">GOA <span className="text-white">Website</span></p>
                    </div>
                    <h2 className="font-bold text-6xl max-w-screen-md mb-10 mt-10 cursor-pointer max-[1900px]:text-3xl max-[1000px]:text-2xl max-[800px]:text-center max-[400px]:text-base">Website to automate tasks and visualize <span className="text-green-800">data.</span></h2>
                    <p className="font-semibold mb-10 pr-6 max-[1100px]:text-sm max-[1100px]:pr-0 max-[1000px]:text-xs max-[800px]:text-center max-[800px]:text-smallest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi commodi eligendi eveniet ex facilis nemo nulla numquam odit sint. Atque eaque earum in ipsum magni nesciunt nisi pariatur quis saepe, voluptas? Aspernatur blanditiis consectetur earum, facere fugiat illum incidunt maxime minima nihil numquam omnis quibusdam recusandae rem. Incidunt, nesciunt.</p>
                    <span className="text-2xl font-bold text-gray-300 pt-2 pb-2 pl-6 pr-6 bg-green-800 rounded-3xl cursor-pointer hover:bg-gradient-to-t from-green-900 to-green-900 transition-all duration-500 ease-in-out flex justify-center items-center max-[1000px]:text-sm max-[1000px]:m-0">Log in</span>
                </div>
            </div>
        </section>
    )
}

export default About;