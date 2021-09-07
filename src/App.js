import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsList from './ContactsList';
import Filter from './Filter';
import Form from './Form';

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

  // contactId = uuidv4();

  formSubmitHandler = data => {
    console.log(data);

    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    //const contactsArray = this.state.contacts;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className="App">
        <div>
          <Form onSubmit={this.formSubmitHandler} />
        </div>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <div>
          <h2>Contacts</h2>
          <ContactsList contacts={filteredContacts} />
        </div>
      </div>
    );
  }
}

export default App;
