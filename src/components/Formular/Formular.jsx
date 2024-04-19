import React, { useState } from 'react';
import styles from './Formular.module.css';
import Button from 'components/Button/Button';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Formular = ({ onAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name and a number.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.name}>Name</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChangeName}
          className={styles.input}
        />

        <label className={styles.number}>Number </label>
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChangeNumber}
          className={styles.input}
        />

        <Button title="Add contact" type="submit" />
      </form>
    </div>
  );
};

Formular.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default Formular;
