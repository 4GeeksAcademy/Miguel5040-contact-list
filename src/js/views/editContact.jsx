import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/addContact.css";
import { Context } from "../store/appContext.js";

export const EditContact = () => {

    const contexto = useContext(Context);
    const navigate = useNavigate();

    const [dataContacto, setDataContacto] = useState({
        "full_name": contexto.store.editContact.full_name,
        "email": contexto.store.editContact.email,
        "agenda_slug": "alberto-agenda",
        "address": contexto.store.editContact.address,
        "phone": contexto.store.editContact.phone
    })

    //Funcion para manejar inputs
    function manejarInputs(event) {
        setDataContacto({
            ...dataContacto,
            [event.target.id]: event.target.value
        })
    }


    //Funcion para manejar el boton save
    function manejarBotonSave() {
        if (
            dataContacto.full_name.trim() === '' ||
            dataContacto.email.trim() === '' ||
            dataContacto.phone.trim() === '' ||
            dataContacto.address.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return
        };
        console.log(dataContacto);
        editarContacto();
        navigate("/");
    }

    //Funcion para enviar los datos a la API
    async function editarContacto() {
        await fetch("https://playground.4geeks.com/apis/fake/contact/" + contexto.store.editContact.id,
            {
                method: "PUT",
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
                <input id="full_name" type="text" placeholder="Full name" className="mb-3" value={dataContacto.full_name} onChange={manejarInputs} required />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter email" className="mb-3" value={dataContacto.email} onChange={manejarInputs} required />

                <label htmlFor="phone">Phone</label>
                <input id="phone" type="number" placeholder="Enter phone" className="mb-3" value={dataContacto.phone} onChange={manejarInputs} required />

                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="Enter address" className="mb-3" value={dataContacto.address} onChange={manejarInputs} required />
            </div>
            <div className="contenedor-submit">
                <button onClick={manejarBotonSave} >save</button>
            </div>
            <Link to="/">or get back to contacts</Link>
        </div>
    )
}