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
        this.setState({
          user: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.user.name}</h1>
        <h3>{this.state.user.login}</h3>
        <p>Location: {this.state.user.location}</p>
        <p>
          Profile:{" "}
          <a href={this.state.user.html_url}>{this.state.user.html_url}</a>
        </p>
        <p>Followers: {this.state.user.followers}</p>
        <p> Following: {this.state.user.following}</p>
        <p>Bio: {this.state.user.bio}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
