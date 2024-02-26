"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginStudent = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">Login Page for Student</h1>
      <button onClick={() => router.push("/login")}>Go to Login Student</button>
    </div>
  );
};

export default LoginStudent;
