"use client";
import { useState } from "react";
import style from "./style.module.css";

export default function Home() {
  const [color, setColor] = useState("red");
  const { red } = style;
  const isLoggedIn = false;
  return (
    <main>
      <h1 className={color === "red" ? style.red : style.green}>
        Condition with style
      </h1>

      <h2 style={{ backgroundColor: color === "red" ? "red" : "green" }}>
        This Heading two
      </h2>

      <h3 id={style.orange}>This is Heading three</h3>
      <h4 className={red}>This is heading 4</h4>
      <h4 className={red}>This is heading 4</h4>
      <h4 className={red}>This is heading 4</h4>
      <h4 className={red}>This is heading 4</h4>
      <button onClick={() => setColor("green")}>Update Color</button>

      {/* condition with html tag */}
      {isLoggedIn ? (
        <h3>I am Heading 3 tag </h3>
      ) : (
        <p>I am simple paragraph tag</p>
      )}
    </main>
  );
}
