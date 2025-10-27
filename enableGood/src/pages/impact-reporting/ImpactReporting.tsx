import ReportCards from "../../components/ui/ReportCards";
import ReportMap from "../../components/ui/ReportMap";
import styles from "./ImpactReporting.module.css";

const ReportHero = () => (
  <section className={styles["report-section"]}>
    <div className="container-90">
      <div className={styles["report-heading"]}>
        <h1>Impact Reports</h1>
        <p>
          Take a look at all the{" "}
          <span className={styles["report-span"]}>Good</span> we are doing
          together
        </p>
      </div>
    </div>
    <div className="container-90">
      <ReportCards />
    </div>

    <ReportMap />
  </section>
);

export default function ImpactReport() {
  return (
    <>
      <ReportHero />
    </>
  );
}
