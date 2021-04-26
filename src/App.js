import shortid from 'shortid';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import Form from './Components/Form';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();


    return (
      <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </>
    );
  }
}


export default App;
