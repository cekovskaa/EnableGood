import "../../styles/Report.css";

export default function ReportMap() {
  return (
    <section className="report-custom-section">
      <div className="container-80">
        <h4 className="text-center mb-5">View Our Global Reach</h4>
        <div className="report-map">
          <img
            src="/src/assets/images/world-map.png"
            alt="Report map image"
            className="report-map-image"
          />
        </div>
      </div>
    </section>
  );
}
