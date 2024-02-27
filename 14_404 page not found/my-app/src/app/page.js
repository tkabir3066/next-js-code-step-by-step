"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <div>
        <h1>Dynamic Routing</h1>
        <Link href="/login">Go to Login page</Link>
        <br />
        <br />
        <Link href="/about">Go to About page</Link>
        <br />
        <br />
        {/* <button onClick={() => router.push("/login")}>Go to Login Page</button>
        <button onClick={() => router.push("/about")}>Go to About Page</button> */}
        <button onClick={() => navigate("/login")}>Go to Login Page</button>
        <button onClick={() => navigate("/about")}>Go to About Page</button>
      </div>
    </main>
  );
}
