import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Followers from "./Followers";
import styled from "styled-components";
import "./App.css";

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
    const CardContainer = styled.div`
      display: flex;
      margin: 40px;
      flex-wrap: wrap;
    `;

    const Card = styled.div`
      background-color: white;
      border: 1px solid #443e3e;
      box-shadow: 0px 5px 20px rgb(71, 71, 71);
      border-radius: 15px;
      width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    `;

    const Image = styled.img`
      border-radius: 15px;
      width: 500px;
    `;

    const Username = styled.h2`
      color: black;
      font-weight: bold;
      text-align: center;
    `;

    const UserInfo = styled.p`
      color: black;
      text-align: center;
    `;
    return (
      <CardContainer>
        <Card>
          <Image
            src={this.state.user.avatar_url}
            alt="Follower Profile Picture"
          ></Image>
          <Username>Username: {this.state.user.login}</Username>
          <UserInfo>
            Profile:{" "}
            <a href={this.state.user.html_url}>{this.state.user.html_url}</a>
          </UserInfo>
          <UserInfo>Followers: {this.state.user.followers}</UserInfo>
          <UserInfo> Following: {this.state.user.following}</UserInfo>
        </Card>
        <Followers follower={this.state.followers} />
      </CardContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
