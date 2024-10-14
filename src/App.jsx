import { useEffect, useState } from "react";
import personsServices from "./services/personsServices";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personsServices.getAll().then((data) => setPersons(data));
  }, []);

  const [personName, setPersonName] = useState("");
  const [personNumber, setPersonNumber] = useState("");

  const handleSubmit = () => {
    const newPerson = { name: personName, number: personNumber };

    const personFound = persons.find(
      (person) => person.name === newPerson.name
    );

    if (!personFound) {
      // IF THE NAME IS NOT ON THE LIST
      // Add new person to the state and to the database.

      setPersons((previousPersons) => previousPersons.concat(newPerson));

      personsServices.create(newPerson);
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
      }
    }

    setPersonName("");
    setPersonNumber("");
  };

  return (
    <>
      <h1>The Phonebook</h1>
      {/* <Filter/> */}
      <PersonForm
        addPerson={handleSubmit}
        setPersonName={setPersonName}
        personName={personName}
        setPersonNumber={setPersonNumber}
        personNumber={personNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </>
  );
}

export default App;
