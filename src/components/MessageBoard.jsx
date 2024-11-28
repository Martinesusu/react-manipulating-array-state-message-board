import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [textMessage, setTextMessage] = useState("");

  const handleMessageChange = (event) => {
    setTextMessage(event.target.value);
  };

  const addNewMessage = (event) => {
    event.preventDefault();
    if (textMessage.trim()) { 
      setMessage([...message, textMessage]);
      setTextMessage("");
    }
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageChange}
            value={textMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addNewMessage}>Submit</button>
      </div>
      <div class="board">
          {message.map((item, index) => (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button className="delete-button" onClick={() => {deleteMessage(index)}}>x</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MessageBoard;
