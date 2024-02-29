import Image from "next/image";
import Profile from "../../public/vercel.svg";

export default function Home() {
  console.log(Profile);
  return (
    <main>
      <h1>Image Optimization in Next js</h1>
      {/* <Image src={Profile} height={500} width={500} /> */}
      {/* <img src={Profile.src} /> */}

      <Image
        src="https://cdn.rohde-schwarz.com/image/market-segments/wireless-communications/wireless-communications-cell-phone-in-use-promotional-image_200_57799_1440_330_36.jpg"
        width={800}
        height={800}
      />
    </main>
  );
}
