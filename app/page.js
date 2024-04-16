import Image from "next/image";
import RootLayout from "./layout";

const HomePage = () => {
  return (
    <div>
      {
        <Image
          style={{
            borderRadius: "25px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px",
            marginBottom: "100px",
          }}
          src="/images/download.jpg"
          alt="Picture of a beautiful house"
          width={500}
          height={500}
        />
      }
      <section style={{ marginLeft: "10px" ,marginBottom: "100px", fontSize: "18px" }}>
        <p>
          Welcome! to Premier Stay Ventures LLC. where customer service and
          experiance is our top priority.Currently we have one property that we
          hope you consider for your next vacation. Feel free to click on the
          Properties tap in the navigation bar to view the property. If you have
          any questions send us a message and someone will contact you as soon
          as possible.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
