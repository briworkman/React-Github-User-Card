import React, { useEffect } from "react";
import styled from "styled-components";

function Followers(props) {
  const { follower } = props;
  useEffect(() => {
    console.log(follower);
  }, [follower]);

  const CardContainer = styled.div`
    display: flex;
    margin: 40px;
    flex-wrap: wrap;
  `;

  const Image = styled.img`
    border-radius: 15px;
    width: 500px;
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
    margin-bottom: 40px;
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
      {props.follower.map(follower => (
        <Card>
          <Image
            className="avatar"
            src={follower.avatar_url}
            alt="follower avatar"
          ></Image>
          <Username>Username: {follower.login}</Username>
          <UserInfo>
            Profile: <a href={follower.html_url}>{follower.html_url}</a>
          </UserInfo>
          <UserInfo>Followers: {follower.followers_url.length}</UserInfo>
          <UserInfo>Following: {follower.following_url.length}</UserInfo>
        </Card>
      ))}
    </CardContainer>
  );
}

export default Followers;
