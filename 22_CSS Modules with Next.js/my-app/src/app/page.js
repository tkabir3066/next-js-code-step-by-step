import Image from "next/image";
import styles from "./page.module.css";
import custom from "./custom.module.css";
import other from "./other.module.css";
import outside from "@/styles/outside.module.css";
export default function Home() {
  return (
    <main>
      <h1 className={custom.main}>CSS Modules with Next js</h1>
      <h2 className={other.main}>This is Heading 2</h2>
      <h3 className={outside.main}>My name is Tutul Kabir</h3>
    </main>
  );
}
