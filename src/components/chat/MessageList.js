import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Men from "@material-ui/icons/SentimentSatisfiedAltTwoTone";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Tooltip from '@material-ui/core/Tooltip';


const MessageListStyle = styled.ul`
  padding: 0 0 0 6px;
  margin: 0;
  width: 100%;
  max-height: 50vh;
  overflow: auto;
  background: white;
  border: 1px solid black;
`;
const MessageItem = styled.li`
  margin: 15px 0;
  .message-wrap {
    display: flex;
    justify-content: space-between;
    background-color: #f0fff0;
    font-weight: 500;
    font-size: 24px;
  }
`;

const MessageList = ({ messages, deleteMessage, isLoading }) => {
  console.log(isLoading);

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <MessageListStyle>
      {messages.map((message) => {
        return (
          <MessageItem key={message.id}>
            <div>{message.date} </div>

            <div className="message-wrap">
              <div>
                <IconButton color="primary">
                  <Men />
                </IconButton>{" "}
                {message.text}
              </div>
              <Tooltip title="удалить сообщение" arrow>

              <IconButton
                onClick={() => {
                  deleteMessage(message.id);
                }}
                color="secondary"
              >
                <HighlightOffIcon />
              </IconButton>
              </Tooltip>
            </div>
          </MessageItem>
        );
      })}
    </MessageListStyle>
  );
};
export default MessageList;
