import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/briworkman")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Is this thing on?</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
