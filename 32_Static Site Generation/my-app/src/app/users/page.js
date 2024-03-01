import React from "react";
import getUsers from "../../../services/getUsers";
import Link from "next/link";
async function Users() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Users;
