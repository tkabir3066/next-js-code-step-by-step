import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Basic Routing | Home Page</h1>
      </div>
    </main>
  );
}
