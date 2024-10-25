
import FooterMain from "../Components/FooterMain";
import React from "react";

const Footer = React.memo(() => {
    return (
        <section className="bg-gray-300 pt-20">
            <FooterMain />
        </section>
    )
})

export default Footer;