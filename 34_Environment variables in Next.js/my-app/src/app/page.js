import { API_BASE_URL } from "@/config/constants";

export default function Home() {
  console.log(process.env.DB_PASSWORD);
  return (
    <main>
      {process.env.NODE_ENV === "development" ? (
        <h1>You are on development mode</h1>
      ) : (
        <h1>You are on Production Mode</h1>
      )}
      <h1>Environment variable in next js</h1>
      <h1> {API_BASE_URL}</h1>
    </main>
  );
}
