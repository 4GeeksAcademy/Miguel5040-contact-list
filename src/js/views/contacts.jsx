import React from "react";
import { Link } from "react-router-dom";
import { ContactElement } from "../component/contact-element.jsx";

export const Contacts = () => {
    return (
        <div className="container">
            <div className="contenedor-button d-flex justify-content-end">
                <Link to={"/form"}><button>Add new contact</button></Link>
            </div>
            <section>
                <ContactElement />
                <ContactElement />
                <ContactElement />
                <ContactElement />
            </section>
        </div>
    )
}