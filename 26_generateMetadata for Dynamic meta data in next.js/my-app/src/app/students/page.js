import React from "react";

const Students = () => {
  return (
    <div>
      <h1>Student Page</h1>
    </div>
  );
};

export default Students;

export const generateMetadata = () => {
  return {
    title: "Student page",
    description: "Student page description",
  };
};
