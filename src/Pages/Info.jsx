import Cards from "../Components/Cards.jsx";
import About from "../Components/About.jsx";
import React from "react";

const Info = React.memo(() => {
    return (
        <section className="bg-gray-300">
            <Cards />
            <About />
        </section>
    )
})

export default Info;