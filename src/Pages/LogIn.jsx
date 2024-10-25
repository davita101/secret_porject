import Navbar from "../Components/Navbar.jsx";
import LogInComponent from "../Components/LogInComponent.jsx";
import React from "react";

const logIn = React.memo(() => {
    return (
        <section className="h-screen">
            <Navbar />
            <LogInComponent />
        </section>
    )
})

export default logIn;