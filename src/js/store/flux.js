const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],

			editContact: {}
		},
		actions: {
			loadSomeData: () => { },

			addContact: (nuevoContacto) => {
				const store = getStore();
				const updatedContacts = [...store.contacts, nuevoContacto];
				setStore({ contacts: updatedContacts });
			},

			initialiteContacts: (arrrayContacts) => {
				setStore({ contacts: arrrayContacts });
			},

			updateContact: (contact) => {
				setStore({ editContact: contact });
			}
		}
	};
};

export default getState;
