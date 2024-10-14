import { useEffect, useState } from "react";
import personsServices from "./services/personsServices";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import SuccessfullMessage from "./components/SucessfullMessage";

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personsServices.getAll().then((data) => setPersons(data));
  }, []);

  const [message, setMessage] = useState("");
  const [personName, setPersonName] = useState("");
  const [personNumber, setPersonNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [displayMessage, setDisplayMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name: personName, number: personNumber };

    const personFound = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (!personFound) {
      // IF THE NAME IS NOT ON THE LIST
      // Add new person to the state and to the database.

      setPersons((previousPersons) => previousPersons.concat(newPerson));

      personsServices.create(newPerson);

      setMessage(`Congrats, you have added the number of ${newPerson.name}`);
      setDisplayMessage(true);
      setTimeout(() => {
        setDisplayMessage(false);
        setMessage(""); // Clear the message after 5 seconds
      }, 5000);
    } else {
      // IF THE NAME IS ON THE LIST
      // Ask if the user wants to replace the number of the person

      if (
        window.confirm(
          "Name already on the list, do you want to replace the number?"
        )
      ) {
        personsServices.update(personFound.id, {
          ...personFound,
          number: personNumber,
        });

        persons.map((person) =>
          person.id !== personFound.id
            ? person
            : { ...person, number: personNumber }
        );
        setMessage(
          `Congrats, you have replaced the number of ${newPerson.name}`
        );
        setDisplayMessage(true);
        setTimeout(() => {
          setDisplayMessage(false);
          setMessage(""); // Clear the message after 5 seconds
        }, 5000);
      }
    }

    setPersonName("");
    setPersonNumber("");
    setFilterName("");
  };

  return (
    <>
      <h1>The Phonebook</h1>
      <Filter filter={filterName} setFilter={setFilterName} />
      <PersonForm
        addPerson={handleSubmit}
        setPersonName={setPersonName}
        personName={personName}
        setPersonNumber={setPersonNumber}
        personNumber={personNumber}
      />
      <SuccessfullMessage message={message} displayMessage={displayMessage} />

      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </>
  );
}

export default App;
