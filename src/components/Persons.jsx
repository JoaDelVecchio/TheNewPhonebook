const Persons = ({ persons, filterName, deletePerson }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          filterName == ""
            ? true
            : person.name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map((person, i) => (
          <li key={i}>
            {person.name} - {person.number}{" "}
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
