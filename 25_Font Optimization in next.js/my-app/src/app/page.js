import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});
import Profile from "../../public/vercel.svg";

export default function Home() {
  console.log(Profile);
  return (
    <main>
      <h1>Font Optimization in Next js</h1>
      {/* <h1 style={{ fontFamily: ["Roboto", "sans-serif"], fontWeight: 100 }}>
        Font with Link tag in next
      </h1> */}

      <h1 className={roboto.className}>Fonts with next js font feature</h1>
    </main>
  );
}
