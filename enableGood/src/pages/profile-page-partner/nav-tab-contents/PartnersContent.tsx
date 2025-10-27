import PhotoShowcase from "../../../components/ui/PhotoShowcase";
import styles from "./NavContent.module.css";

const partners = [
  {
    name: "Hershey's",
    logo: "/src/assets/images-account/hersheys-logo.png",
    size: "large",
    position: 1,
  },
  {
    name: "Yamaha",
    logo: "/src/assets/images-account/yamaha-logo.png",
    size: "large",
    position: 2,
  },
  {
    name: "Starbucks",
    logo: "/src/assets/images-account/starbucks-logo.png",
    size: "small",
    position: 3,
  },
  {
    name: "Amazon",
    logo: "/src/assets/images-account/amazon-logo.png",
    size: "small",
    position: 4,
  },
  {
    name: "Google",
    logo: "/src/assets/images-account/google-logo.png",
    size: "small",
    position: 5,
  },
  {
    name: "Oracle",
    logo: "/src/assets/images-account/oracle-logo.png",
    size: "large",
    position: 6,
  },
  {
    name: "Android",
    logo: "/src/assets/images-account/android-logo.png",
    size: "small",
    position: 7,
  },
  {
    name: "Coca Cola",
    logo: "/src/assets/images-account/cocacola-white-logo.png",
    size: "large",
    position: 8,
  },
  {
    name: "LC",
    logo: "/src/assets/images-account/lc-blue-logo.png",
    size: "small",
    position: 9,
  },
  {
    name: "Ford",
    logo: "/src/assets/images-account/ford-logo.png",
    size: "small",
    position: 10,
  },
  {
    name: "Coca Cola White",
    logo: "/src/assets/images-account/cocacola-white-logo.png",
    size: "large",
    position: 11,
  },
  {
    name: "Hershey's 2",
    logo: "/src/assets/images-account/hersheys-logo.png",
    size: "large",
    position: 12,
  },
  {
    name: "Beats",
    logo: "/src/assets/images-account/b-logo.png",
    size: "small",
    position: 13,
  },
  {
    name: "Company tagline",
    logo: "/src/assets/images-account/business-tagline-logo.png",
    size: "large",
    position: 14,
  },
  {
    name: "Adidas",
    logo: "/src/assets/images-account/adidas-logo.png",
    size: "small",
    position: 15,
  },
  {
    name: "Citi",
    logo: "/src/assets/images-account/citi-teal-logo.png",
    size: "large",
    position: 16,
  },
];

export default function PartnersContent() {
  return (
    <>
      <div className={styles["partners-container"]}>
        <div className={styles["partners-diagram-mobile"]}>
          <img
            src="/src/assets/images-account/partner-content.png"
            alt="Mobile diagram image"
          />
        </div>
        <div className={styles["partners-diagram"]}>
          {/* Center Company Logo */}
          <div className={styles["center-logo"]}>
            <img
              src="/src/assets/images/company-logo-circle.png"
              alt="CARE Logo"
            />
          </div>

          {/* Partner Logos */}
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${styles["partner-circle"]} ${
                styles[`partner-${partner.position}`]
              } ${styles[partner.size]}`}
            >
              <div className={styles["connection-line"]}></div>
              <div className={styles["partner-logo-wrapper"]}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <PhotoShowcase />
      </div>
    </>
  );
}
