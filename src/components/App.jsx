
import { ContactForm } from './ContactForm/ContactForm'
// import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, deleteContactAction } from 'redux/redusers/contactsReducer';
import { filterAction } from 'redux/redusers/filterReducer';


// const useLocalStorage = (key, defaultValue) => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(contacts));
//   }, [key, contacts]);

//   return [contacts, setContacts];
// }

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const contacts = useSelector((state)=>state.contacts);
  const filter = useSelector((state)=>state.filter);
  const dispatch = useDispatch();

  const addUserContact = ({ name, number }) => {
    // const userContact = {
    //   name,
    //   number,
    //   id: nanoid()
    // }
    // dispatch({ type: 'contacts/addContacts', payload: userContact});
    dispatch(addContactAction({name, number}))
  }


  const deleteUserContact = contactId => {
// dispatch({type: 'contacts/deleteContacts', payload: { id: contactId },})
dispatch(deleteContactAction(contactId))}

  const handleFilterChange = (e) => {
    const { value } = e.target
  //  dispatch({ type: 'filter/setFilter', payload: value })
  dispatch(filterAction(value))
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()))

  return <div>
    <h1>Phonebook</h1>

    <ContactForm contacts={contacts} addUserContact={addUserContact} />

    <h1>Contacts</h1>

    <Filter filter={filter} onFilterChange={handleFilterChange} />

    <ContactList filteredContacts={filteredContacts} onDeleteContact={deleteUserContact} />
  </div>
}


