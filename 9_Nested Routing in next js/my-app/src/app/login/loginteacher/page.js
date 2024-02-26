"use client";
import React from "react";
import { useRouter } from "next/navigation";
const LoginTeacher = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page for Teacher</h1>
      <button onClick={() => router.push("/login")}>Go to Login Page</button>
    </div>
  );
};

export default LoginTeacher;
