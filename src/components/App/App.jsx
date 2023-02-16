import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // addContact = ({ name, number }) => {
  //   const contact = { id: nanoid(), name, number };
  //   const normalizedName = name.toLowerCase();

  //   if (
  //     this.state.contacts.find(
  //       contact => contact.name.toLowerCase() === normalizedName
  //     )
  //   ) {
  //     return alert(`${name} is already in contacts!`);
  //   }

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  // addContact = (values, { resetForm }) => {
  //   console.log(values);
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterContacts} />
        <ContactList
          contacts={filteredContacts}
          onDeleteButton={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
