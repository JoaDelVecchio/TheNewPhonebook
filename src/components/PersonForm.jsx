const PersonForm = ({
  addPerson,
  personName,
  setPersonName,
  setPersonNumber,
  personNumber,
}) => {
  return (
    <div>
      <form onSubmit={(e) => addPerson(e)}>
        <div>
          <label htmlFor="personName">Name: </label>
          <input
            id="personName"
            name="personName"
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="personNumber">Number: </label>
          <input
            id="personNumber"
            name="personNumber"
            type="text"
            value={personNumber}
            onChange={(e) => setPersonNumber(e.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default PersonForm;
