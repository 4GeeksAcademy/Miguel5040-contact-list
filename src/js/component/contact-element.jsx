import React from "react";

export const ContactElement = () => {
    return (
        <div className="container d-flex justify-content-between mb-4 mt-4">
            <div className="contenedor-info">
                <img src="" />
                <div className="contenedor-texto">
                    <h3>Miguel Alberto</h3>
                    <p>2340 Mexico bcs</p>
                    <p>(123)4567890</p>
                    <p>miguel.alberto@tesla.com</p>
                </div>
            </div>
            <div className="contenedor-buttons">
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-trash-fill"></i>
            </div>
        </div>
    )
}