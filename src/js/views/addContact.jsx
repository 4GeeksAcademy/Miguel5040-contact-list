import React from "react";

export const AddContact = () => {
    return (
        <div className="container">
            <h1>Add a new contact</h1>
            <div className="contenedor-form d-flex flex-column">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Full name" className="mb-3"/>

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter email" className="mb-3"/>

                <label htmlFor="phone">Phone</label>
                <input id="phone" type="number" placeholder="Enter phone" className="mb-3"/>

                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="Enter address" className="mb-3"/>
            </div>
            <div className="contenedor-submit">
                <button>save</button>
            </div>
        </div>
    )
}