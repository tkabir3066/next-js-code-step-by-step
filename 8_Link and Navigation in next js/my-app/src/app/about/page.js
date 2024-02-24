"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About page</h1>
      <Link href="/">Go to Home Page</Link>

      <br />
      <br />
      <button onClick={() => router.push("/")}>Go to Home Page</button>
    </div>
  );
};

export default About;
