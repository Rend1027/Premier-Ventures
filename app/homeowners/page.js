import Image from "next/image";

const Homeowners = () => {
  return (
    <div
      style={{
        fontFamily: '"Arial", sans-serif',
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <section style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Let us be the best tenant you ever had!
        </h1>
        <p style={{ fontSize: "18px" }}>
          Are you leasing out your home? Are you a property manager looking for
          quality long-term tenants? Then look no further! Premier Stay Ventures
          LLC. is a company that will lease your property full time and then
          manage it as a short-term or medium-term rental property. We house
          traveling nurses/professionals and vacationing families.{" "}
        </p>
      </section>
      <section style={{ fontSize: "18px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
          Benefits of having us as your tenant
        </h2>
        <ul>
          <li>Reliable Tenant</li>
          <p>
            You will not have to seek out payment because as your tenant we we
            will pay the rent on time every month, so you can have the peace of
            mind of knowing you will receive timely payment every single month. 
          </p>
          <Image
            style={{ borderRadius: "50px" }}
            src="/images/money.jpg"
            alt="picture of money"
            width={500}
            height={500}
          />
          <li>Profesional Property Care</li>
          <li>Zero Turnover</li>
        </ul>
        {/* CTA Button Example */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Contact Us Today!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homeowners;
