import React from "react";
import styled from "styled-components";
import SmileComponent from './Smiles'

const FormStyle = styled.form`
  background-color: #f0fff0;
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 60px;
  input {
    width: 100%;
    padding: 15px 10px;
    border: none;
    margin: 0;
    font-weight: 200;
  }
  input::placeholder {
    color: black;
  }
`;

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  smileChange = (e) => {
    let smile = e
    this.setState((state) => {
      return {message: state.message + smile};
    });

  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      date: new Date().toLocaleString(),
      text: this.state.message,
      id: 555 + Date.now().toString(),
    };

    this.props.setMessage(newQuestion);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChangeInput}
          value={this.state.message}
          placeholder="Введите значение и нажмите ENTER"
          type="text"
        />
        <SmileComponent smileChange={this.smileChange}/>
         
      </FormStyle>
    );
  }
}

export default MessageForm;
