const SuccessfullMessage = ({ message, displayMessage }) => {
  return (
    <div className="message-container">
      <p className={`success-message ${!displayMessage ? "hidden" : ""}`}>
        {message}
      </p>
    </div>
  );
};

export default SuccessfullMessage;
