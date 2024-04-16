const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "calc(100% - 256px)",
        marginLeft: "256px",  // Adjust width to not extend under the sidebar
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Premier Stay Ventures</h1>
      <p style={{ fontSize: "18px" }}>Discover your next stay with us.</p>
    </header>
  );
};

export default Header;
