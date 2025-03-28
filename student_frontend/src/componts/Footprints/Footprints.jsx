import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const Footprints = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#eaf0f1" }}>
      <div className="container-fluid text-center"> {/* Use container-fluid */}
        <h6 style={{ color: "#004d40" }}>Explore the Charm of Sri Lanka</h6>
        <h2 className="fw-bold" style={{ color: "#00796b" }}>
          Our Footprints in Sri Lanka
        </h2>
        <div className="row justify-content-center mt-5">
          {/* Circle elements */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div
              className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "150px",
                height: "150px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // scaling + shadow
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // shadow effect
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1) rotate(5deg)"; // scaling + rotation on hover
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)"; // enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) rotate(0deg)"; // reset scaling + rotation
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)"; // reset shadow
              }}
            >
              <div>
                <h3 className="fw-bold mb-0">15+</h3>
                <p className="mb-0">Popular Cities</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div
              className="rounded-circle bg-info text-white d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "150px",
                height: "150px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // scaling + shadow
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1) rotate(5deg)";
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) rotate(0deg)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div>
                <h3 className="fw-bold mb-0">3</h3>
                <p className="mb-0">Tourist Regions</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div
              className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center mx-auto"
              style={{
                width: "150px",
                height: "150px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // scaling + shadow
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1) rotate(5deg)";
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) rotate(0deg)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div>
                <h3 className="fw-bold mb-0">500+</h3>
                <p className="mb-0">Tourist Attractions</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5" style={{ color: "#00796b" }}>
          <em>
            "Sri Lanka, where nature and culture blend beautifully." <br />
            - Shashika Prabath
          </em>
        </p>
      </div>
    </section>
  );
};

export default Footprints;
