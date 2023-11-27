import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactElement } from "../component/contact-element.jsx";
import "../../styles/contacts.css";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

const contactDefault = {
    full_name: "Default Contact",
    email: "default@4geeks.com",
    agenda_slug: "alberto-agenda",
    address: "Default direction",
    phone: "000000000"
}


export const Contacts = () => {

    const contexto = useContext(Context);

    //Funcion para traer la informacion de la agenda de la API
    async function solicitarData() {
        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/alberto-agenda");
            const data = await response.json();
            if (data.length === 0) {
                await crearAgenda();
                const respuesta = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/alberto-agenda");
                const info = await respuesta.json();
                contexto.actions.initialiteContacts(info);
                alert("Tus contactos se han borrado por problemas del servidor")
                return
            }
            contexto.actions.initialiteContacts(data);
        } catch (error) {
            console.error(error);
        }
    }

    //Funcion generica para crear agenda
    async function crearAgenda() {
        await fetch("https://playground.4geeks.com/apis/fake/contact",
            {
                method: "POST",
                body: JSON.stringify(contactDefault),
                headers: {
                    'Content-Type': "application/json"
                }
            });
    }

    //Funcion para verificar la existencia de la agenda.
    // async function verificarAgendaExiste(info) {
    //     if (info.length === 0) {
    //         await crearAgenda();
    //         return true
    //     }
    //     return false
    // }

    //Funcion para borrar contacto
    async function borrarContacto(id) {
        await fetch("https://playground.4geeks.com/apis/fake/contact/" + id,
            {
                method: "DELETE"
            });

        solicitarData();
    }



    useEffect(() => {
        solicitarData();
    }, [])


    return (
        <div className="container">
            <div className="contenedor-button d-flex justify-content-end mb-5">
                <Link to={"/form"}><button>Add new contact</button></Link>
            </div>

            <section>
                {
                    contexto.store.contacts.map((value) => (
                        <ContactElement key={value.id} contacts={value} borrarContacto={borrarContacto} id={value.id} />
                    ))
                }
            </section>





        </div>
    )
}