import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import React from "react";

const Home = React.memo(() => {
    return (
        <header className="h-4/5">
            <Navbar/>
            <Hero />
        </header>
    )
})

export default Home;