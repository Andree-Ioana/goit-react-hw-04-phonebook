import React, { useState } from 'react';
import styles from './ContactBook.module.css';
import Title from 'components/Title/Title';
import Formular from 'components/Formular/Formular';
import ContactList from 'components/ContactList/ContactList';
import contactsData from '../helpers/data.json';

const ContactBook = () => {
  const [contacts, setContacts] = useState(contactsData);

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div>
      <Title title="Phonebook" />
      <Formular onAddContact={handleAddContact} contacts={contacts} />
      <Title title="Contacts" />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default ContactBook;
