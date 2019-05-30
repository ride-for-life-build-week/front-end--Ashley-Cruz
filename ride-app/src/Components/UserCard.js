import React from "react";

function UserCard(props) {
  return (
    <section className="user-card">
      <li>
        <span>Name: </span>
        {props.user.name}
      </li>
      <li>
        <span>Email: </span>
        {props.user.email}
      </li>
      <li>
        <span>Username: </span>
        {props.user.username}
      </li>
      <li>
        <span>Password: </span>
        {props.user.password}
      </li>
    </section>
  );
}

export default UserCard;
