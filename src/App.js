import React from "react";
import { Menu } from "./components/Menu";
import Questions from "./components/Questions";

import ChatComponent from "./components/chat/ChatComponent";
import AddQuestion from "./components/AddQuestion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import { QuestionTitle } from "./components/QuestionTitle";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid ">
          <div className="row">
            <div className="col">
              <Menu />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row mt-3">
            <div className="col-12 mb-3">
              <Route path="/questions" render={() => <QuestionTitle />} />
            </div>
            <div className="col-12 ">
              <Route path="/questions" render={() => <Questions />} />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-3">
              <Route path="/questions" render={() => <AddQuestion />} />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col ">
              <Route path="/chat" render={() => <ChatComponent />} />
            </div>
          </div>

          <div className="row">
            <Route exact path="/" render={() => <About />} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
