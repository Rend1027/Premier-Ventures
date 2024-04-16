import Image from "next/image";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "calc(100% - 256px)",
        marginLeft: "256px", // Adjust width to not extend under the sidebar
        padding: "20px",
      }}
    >
      <Image
        src="/images/Premierstayventures.png"
        alt="logo"
        width={650} // More suitable width, adjust based on design needs
        height={250} // Maintain aspect ratio
        layout="fixed"
      />
    </header>
  );
};

export default Header;
