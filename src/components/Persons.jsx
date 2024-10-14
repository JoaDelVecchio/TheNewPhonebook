const Persons = ({ persons, filterName }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          filterName == ""
            ? person
            : person.name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map((person, i) => (
          <li key={i}>
            {person.name} - {person.number}{" "}
          </li>
        ))}
    </ul>
  );
};

export default Persons;
