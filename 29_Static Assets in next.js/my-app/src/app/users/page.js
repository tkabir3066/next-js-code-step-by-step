import React from "react";

const userList = async () => {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
};
const User = async () => {
  const users = await userList();
  console.log(users);
  return (
    <div>
      <h1>User Name List</h1>
      {users.map((item) => (
        <div>
          <h2>
            User Name : {item.firstName} {item.lastName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default User;
