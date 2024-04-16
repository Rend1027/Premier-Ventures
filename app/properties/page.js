const Properties = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <section
        style={{ fontSize: "24px", marginTop: "100px", marginBottom: "50px" }}
      >
        <h1>Properties</h1>
      </section>
      <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <p>Your property listed here</p>
        <p>Second porperty listed here</p>
      </section>
    </div>
  );
};

export default Properties;
