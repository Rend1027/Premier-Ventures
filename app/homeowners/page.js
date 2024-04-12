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
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
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
        <section>
          <h2
            style={{
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Reliable Tenant
          </h2>
          <p>
            You will not have to seek out payment because as your tenant we we
            will pay the rent on time every month, so you can have the peace of
            mind of knowing you will receive timely payment every single month. 
          </p>
          <Image
            style={{ borderRadius: "25px" }}
            src="/images/money.jpg"
            alt="picture of money"
            width={300}
            height={300}
          />
          <section style={{ marginTop: "20px" }}>
            <h2 style={{ fontWeight: "bold" }}>Profesional Property Care</h2>
            <p>
              We keep our managed properties in tip-top shape to keep our guests
              happy. You no longer have to worry about the state of your
              property after a long-term tenant moves out. With us, we hire
              professional cleaners to clean the house after every guest.In
              addition to top-notch property care our insurance will cover any
              damages of up to $1,000,000.
            </p>
            <Image
              style={{ borderRadius: "25px" }}
              src="/images/care.jpg"
              alt="picture of profesionals"
              width={300}
              height={300}
            />
          </section>
          <section style={{ marginTop: "20px" }}>
            <h2 style={{ fontWeight: "bold" }}>Zero Turnover Time</h2>
            <p>
              Ideally we would want to sign a 2 to 4 year lease so you can have
              a peace of mind of steady income for the next several years. Lease
              your property today with Premier Stay Ventures and forget about
              finding new tenants every other year.
            </p>
            <Image
              style={{ borderRadius: "25px" }}
              src="/images/turnOver.jpg"
              alt="picture of keys"
              width={300}
              height={300}
            />
          </section>
        </section>
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
