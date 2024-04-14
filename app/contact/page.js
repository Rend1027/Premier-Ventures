const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "20px", marginBottom: "15px" }}>
        {" "}
        Please contact us with any questions or inquiries you might have and we
        will get back to you as soon as possible!
      </p>
      <form
        style={{
          backgroundColor: "silver",
          width: "50%",
          height: "500px",
          borderRadius: "10px",
          alignContent: "center",
          paddingLeft: "180px",
        }}
      >
        <section>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name"
          ></input>
          <input style={{ marginLeft: "10px" }} placeholder="Last Name"></input>
        </section>
        <br />
        <section>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
          ></input>
        </section>
        <br />
        <section>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Subject"
          ></input>
        </section>
        <br />
        <section>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea rows="4" cols="50" />
        </section>
        <br />
        <button
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            padding: "10px 20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
