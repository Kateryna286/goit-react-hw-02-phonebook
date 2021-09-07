import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsList from './ContactsList';
import Form from './Form';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const contactsArray = this.state.contacts;

    return (
      <div className="App">
        <div>
          <Form onSubmit={this.formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactsList contacts={contactsArray} />
        </div>
      </div>
    );
  }
}

export default App;
