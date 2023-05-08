import React, { Component } from 'react';
import { Notify } from 'notiflix';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchFilter from 'components/SearchFilter';
import { Container } from './App.styled';

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

  isContactExists = newContact => {
    const { contacts } = this.state;
    const loweredNewContact = newContact.name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === loweredNewContact
    );
  };

  addContact = newContact => {
    if (this.isContactExists(newContact)) {
      Notify.failure(`${newContact.name} is already in phonebook.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    Notify.success(`${newContact.name} added to phonebook successfully!`);
  };

  deleteContact = contactId => {
    const { contacts } = this.state;
    const contactName = contacts.find(contact => contact.id === contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    Notify.warning(`${contactName.name} delete from phonebook.`);
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  showContacts = () => {
    const { contacts, filter } = this.state;
    const loweredFilter = filter.toLowerCase();
    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(loweredFilter);
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.showContacts();
    return (
      <Container>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className="title">Contacts</h2>
        <SearchFilter filter={filter} onChange={this.handleFilter} />

        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
