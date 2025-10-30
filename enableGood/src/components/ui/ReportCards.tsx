import "../../styles/Report.css";

export default function ReportCards() {
  return (
    <section className="report-custom-section">
      <h4 className="text-center mb-5">This is our Impact</h4>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-3">
          <div className="card bg-lightgreen">
            <div className="card-body text-center">
              <h3 className="card-title mb-3">
                Urban Foodbank Network Q1 2025 Outcome Summary
              </h3>
              <img
                src="/images/report-card1.png"
                alt="Impact card image"
                className="impact-card-img"
              />
              <p className="card-text mt-4">
                {" "}
                “Fed 150,000 individuals through community kitchens.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card bg-lightgreen">
            <div className="card-body text-center">
              <h3 className="card-title">
                Water Access Project Spring 2025 Field Report
              </h3>
              <img
                src="/images/report-card2.png"
                alt="Impact card image"
                className="impact-card-img"
              />
              <p className="card-text">
                {" "}
                “Installed 75 clean-water wells in rural Kenya.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card bg-lightgreen">
            <div className="card-body text-center">
              <h3 className="card-title">
                Water Access Project Spring 2025 Field Report
              </h3>
              <img
                src="/images/report-card1.png"
                alt="Impact card image"
                className="impact-card-img"
              />
              <p className="card-text">
                {" "}
                “Installed 75 clean-water wells in rural Kenya.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card bg-lightgreen">
            <div className="card-body text-center">
              <h3 className="card-title">
                Water Access Project Spring 2025 Field Report
              </h3>
              <img
                src="/images/report-card4.png"
                alt="Impact card image"
                className="impact-card-img"
              />
              <p className="card-text">
                {" "}
                “Installed 75 clean-water wells in rural Kenya.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="d-flex justify-content-center mt-5 report-span">
        See more
      </span>
    </section>
  );
}
