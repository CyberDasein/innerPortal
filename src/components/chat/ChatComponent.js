import React from "react";
import { Title } from "./Title";
import MessageList from "./MessageList";
import { connect } from "react-redux";
import MessageForm from "./MessageForm";
import {
  setMessage,
  deleteMessage,
  fetchedMessage,
} from "../../redux/actionCreators";

import axios from "axios";

class ChatComponent extends React.Component {
  componentDidMount() {
    const { fetchedMessage } = this.props;

    axios.get("./messages.json").then((response) => {
      //искусственная задержка
      setTimeout(()=> {
        fetchedMessage(response.data);
      },1000)     
    });
  }
  render() {

    return (
      <div className="app">
        <Title /> 

        <MessageList
          messages={this.props.messages}
          deleteMessage={this.props.deleteMessage}
          isLoading = {this.props.isLoading}
        />
        <MessageForm setMessage={this.props.setMessage} />
      </div>
    );
  }
}
const mapDispachToProps = {
  setMessage,
  deleteMessage,
  fetchedMessage,
};
const mapStateToProps = (state) => ({
  messages: state.appChat.messages,
  isLoading: state.app.loading,
});
export default connect(mapStateToProps, mapDispachToProps)(ChatComponent);
