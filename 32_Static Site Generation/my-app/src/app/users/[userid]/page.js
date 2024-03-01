import React from "react";
import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const users = await getUsers();
  const currentId = props.params.userid;
  const userData = users[currentId - 1];

  return (
    <div>
      <h1>User Detail Page</h1>
      <h2>Id: {userData.id}</h2>
      <h2>Name: {userData.name}</h2>
      <h2>Website: {userData.website}</h2>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({
    userid: user.id.toString(),
  }));
}
