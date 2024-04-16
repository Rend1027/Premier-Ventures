const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        width: "calc(100% - 256px)",
        marginLeft: "256px", // Adjust width to not extend under the sidebar
      }}
    >
      <section>
        <address>
          Premier Stay Ventures LLC. 2085 Lexington Ave. New York, NY. 10029
        </address>
        <tele>917-860-9106</tele>
        <br />
        <email>psventures@gmail.com</email>
        <p>©2024</p>
      </section>
    </footer>
  );
};

export default Footer;
