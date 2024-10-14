const UnSuccessfullMessage = ({ message }) => {
  return (
    <div>
      <p className={`unsuccess message ${!displayMessage ? "hidden" : ""}`}>
        {message}
      </p>
    </div>
  );
};

export default UnSuccessfullMessage;
