import "./App.css";
import contacts from "./contacts.json"
import { useState } from 'react';


function App() {
  const first5Contacts = contacts.slice(0, 5)
  const [contact, setContacts] = useState(first5Contacts)
  // const {addContacts, setContactAdded } = useState(niIdea)

  function getRandomContact() {
    const remainingContacts = contacts.filter(remainingContact => !contact.includes(remainingContact));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    // we create a new array with the contacts plus the randomcontact
    setContacts([...contact, remainingContacts[randomIndex]])
  }

  function sortByName() {
    const sortedContacts = [...contact].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }

  function sortByPopularity() {
    const sortedContacts = [...contact].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  function deleteContact(contactId){
    console.log(contactId)
    const filteredContact = contact.filter((oneContact)=>{  // el filtro va a realizar un loop

      return oneContact.id !== contactId

    })
    setContacts(filteredContact)

  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button className="headerButton" onClick={() => getRandomContact()}>Add random Contact</button>
      <button className="headerButton" onClick={() => sortByName()}>Sort by Name</button>
      <button className="headerButton" onClick={() => sortByPopularity()}>Sort by Popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact, index) => (
            <tr key={index}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={`Picture of ${contact.name}`}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? (
                <img
                  src="https://w7.pngwing.com/pngs/437/483/png-transparent-gold-trophy-illustration-gold-medal-trophy-champion-cup-medal-gradual-change-metal-thumbnail.png"
                  alt="Oscar"
                  style={{ width: "20px" }}
                />
              ) : "-"}
              </td>
              <td>{contact.wonEmmy ? (
                <img
                  src="https://w7.pngwing.com/pngs/437/483/png-transparent-gold-trophy-illustration-gold-medal-trophy-champion-cup-medal-gradual-change-metal-thumbnail.png"
                  alt="Emmy"
                  style={{ width: "20px" }}
                />
              ) : "-"}
              </td>
              <button className="button" onClick={() => deleteContact(contact.id)}>Delete</button>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
