"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Tutul");
  const apple = (item) => {
    setName("Kabir");
  };

  const InnerComp = () => {
    return <div>Inner Component</div>;
  };
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>
      <h2>Hello I am {name}</h2>
      <button onClick={apple}>Click Me</button>
      {/* <InnerComp /> */}
      {InnerComp()}
    </main>
  );
}
