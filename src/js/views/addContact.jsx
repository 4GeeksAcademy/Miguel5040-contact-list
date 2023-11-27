import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import "../../styles/addContact.css";
import { Context } from "../store/appContext.js";

export const AddContact = () => {

    const contexto = useContext(Context);

    const [dataContacto, setDataContacto] = useState({
        "full_name": "",
        "email": "",
        "agenda_slug": "alberto-agenda",
        "phone": "",
        "address": ""
    });

    //Funcion para manejar el cambio de los input
    function manejarInputs(e) {
        const { id, value } = e.target;
        setDataContacto({ ...dataContacto, [id]: value });
    }

    //Funcion para manejar el boton save
    function manejarBotonSave() {
        contexto.actions.addContact(dataContacto);
        console.log(contexto.store.contacts);
        crearContacto();
    }

    //Funcion para enviar los datos a la API
    async function crearContacto() {
        await fetch("https://playground.4geeks.com/apis/fake/contact",
            {
                method: "POST",
                body: JSON.stringify(dataContacto),
                headers: {
                    'Content-Type': "application/json"
                }
            })
        solicitarData();
    }

    //Funcion para solicitar informacion de la API, y asignarla a flux
    async function solicitarData() {
        const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/alberto-agenda");
        const data = await response.json();
        contexto.actions.initialiteContacts(data);
    }

    return (
        <div className="container contenedor-form">
            <h1>Add a new contact</h1>
            <div className="contenedor-form d-flex flex-column">
                <label htmlFor="full_name">Full Name</label>
                <input id="full_name" type="text" placeholder="Full name" className="mb-3" onChange={manejarInputs} />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter email" className="mb-3" onChange={manejarInputs} />

                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="Enter phone" className="mb-3" onChange={manejarInputs} />

                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="Enter address" className="mb-3" onChange={manejarInputs} />
            </div>
            <div className="contenedor-submit">
                <Link to="/"><button onClick={manejarBotonSave} >save</button></Link>
            </div>
            <Link to="/">or get back to contacts</Link>
        </div>
    )
}