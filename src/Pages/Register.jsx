import RegisterComponent from "../Components/RegisterComponent.jsx";
import Navbar from "../Components/Navbar.jsx";
import React from "react";

const Register = React.memo(() => {
    return (
        <section>
            <Navbar />
            <RegisterComponent />
        </section>
    )
})

export default Register;