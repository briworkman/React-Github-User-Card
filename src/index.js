import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Followers from "./Followers";

class App extends React.Component {
  state = {
    user: [],
    followers: []
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

    axios
      .get("https://api.github.com/users/briworkman/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(this.state.followers);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="user-card">
        <div className="App">
          <img
            className="avatar"
            src={this.state.user.avatar_url}
            alt="follower avatar"
          ></img>
          <h2>Username: {this.state.user.login}</h2>
          <p>
            Profile:{" "}
            <a href={this.state.user.html_url}>{this.state.user.html_url}</a>
          </p>
          <p>Followers: {this.state.user.followers}</p>
          <p> Following: {this.state.user.following}</p>
        </div>
        <Followers follower={this.state.followers} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
