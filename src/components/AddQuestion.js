import React from "react";
import { connect } from "react-redux";
import { addQuestion } from "../redux/actionCreators";

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();

    const newQuestion = {
      questionTitle: this.state.title,
      id: Date.now().toString(),
    };

    if(this.state.title) {
     this.props.addQuestion(newQuestion);
    }
   
    this.setState({ title: "" });
  };
  changeInputHandler = (event) => {
    this.setState({ title: event.target.value });

    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && (
          <div class="alert alert-warning" role="alert">
            {this.props.alert}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="title">Ваш вопрос</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Задать вопрос
        </button>
      </form>
    );
  }
}

const mapDispachToProps = {
  addQuestion,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispachToProps)(AddQuestion);
