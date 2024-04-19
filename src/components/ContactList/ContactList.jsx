import React, { useState } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.filter}>Find contacts by name</label>
      <form className={styles.listContainer}>
        <input
          type="text"
          name="filter"
          value={filter}
          placeholder="Search contacts"
          onChange={handleChange}
        />
      </form>
      <ul className={styles.itemContainer}>
        {filteredContacts.map(contact => (
          <li className={styles.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
