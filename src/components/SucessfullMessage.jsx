const SuccessfullMessage = ({ message, displayMessage }) => {
  return (
    <div>
      <p
        className={`success message ${displayMessage == false ? "hidden" : ""}`}
      >
        {message}
      </p>
    </div>
  );
};

export default SuccessfullMessage;
