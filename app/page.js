import Image from "next/image";
import RootLayout from "./layout";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>Premier Stay Ventures</h1>
      <p>Discover your next stay with us.</p>
      {
        <Image
          style={{ borderRadius: "25px" }}
          src="/images/download.jpg"
          alt="Picture of a beautiful house"
          width={500}
          height={500}
        />
      }
    </div>
  );
};

export default HomePage;
