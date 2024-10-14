const PersonForm = ({
  addPerson,
  personName,
  setPersonName,
  setPersonNumber,
  personNumber,
}) => {
  return (
    <div className="form-container">
      <form onSubmit={(e) => addPerson(e)}>
        <div>
          <label htmlFor="personName">Name:</label>
          <input
            className="input-field"
            id="personName"
            name="personName"
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="personNumber">Number:</label>
          <input
            className="input-field"
            id="personNumber"
            name="personNumber"
            type="text"
            value={personNumber}
            onChange={(e) => setPersonNumber(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">
          Add Person
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
