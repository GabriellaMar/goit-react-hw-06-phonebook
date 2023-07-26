import { initialState } from "./rootReducer";
import { nanoid } from 'nanoid'

export const contactsReducer = (state =initialState.contacts, action) =>{
switch(action.type){
    case 'contacts/addContacts':
        return [...state, action.payload];

    case 'contacts/deleteContacts':
        return state.filter(contact => contact.id !== action.payload.id);

        default:
            return state;
}
}

export const addContactAction = ({ name, number }) => ({
    type: 'contacts/addContacts',
    payload: {
      name,
      number,
      id: nanoid(), 
    },
  });


export const deleteContactAction = (contactId) => ({
    type: 'contacts/deleteContacts',
    payload: {
      id: contactId, 
    },
  })