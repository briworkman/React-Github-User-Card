import React, { useEffect } from "react";

function Followers(props) {
  const { follower } = props;
  useEffect(() => {
    console.log(follower);
  }, [follower]);

  return (
    <div className="card-container">
      {props.follower.map(follower => (
        <div key={follower.id} className="followers-card">
          <img
            className="avatar"
            src={follower.avatar_url}
            alt="follower avatar"
          ></img>
          <h2 className="usernames">Username: {follower.login}</h2>
          <p>
            Profile: <a href={follower.html_url}>{follower.html_url}</a>
          </p>
          <p>Followers: {follower.followers_url.length}</p>
          <p>Following: {follower.following_url.length}</p>
        </div>
      ))}
    </div>
  );
}

export default Followers;
