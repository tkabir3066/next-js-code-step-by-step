import React from "react";

const User = () => {
  return <div>User</div>;
};

export default User;

//static metadata
// export const metadata = {
//   title: "About User page",
//   description: "This is the description of user",
// };

// dynamic metadata

export const generateMetadata = () => {
  return {
    title: "User page title",
    description: "User description",
  };
};
