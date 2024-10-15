const UnSuccessfullMessage = ({ message }) => {
  return message == "" ? null : (
    <div>
      <p className={`unsuccess message `}>{message}</p>
    </div>
  );
};

export default UnSuccessfullMessage;
