import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { AddContact } from "./views/addContact.jsx";
import { Contacts } from "./views/contacts.jsx";
import injectContext from "./store/appContext";
import { EditContact } from "./views/editContact.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="container contenedor-principal">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/form" element={<AddContact />} />
						<Route path="/edit" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
