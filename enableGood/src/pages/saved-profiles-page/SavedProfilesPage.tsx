import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useMatchmakingStore } from "../../store/matchmakingStore";
import { partnersData } from "../../data/partners-data";
import type { Partner } from "../../types/types";
import styles from "./SavedProfilesPage.module.css";
import "../../styles/AccountStyles.css";

export const SavedProfilesPage = () => {
  const { user } = useAuthStore();
  const { savedPartnerIds, loadSavedPartners, unsavePartner } =
    useMatchmakingStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const itemsPerPage = 4;

  useEffect(() => {
    if (user?.id) {
      loadSavedPartners(user.id);
    }
  }, [user?.id, loadSavedPartners]);

  const savedPartners = partnersData.filter((partner) =>
    savedPartnerIds.includes(partner.id)
  );

  const totalPages = Math.ceil(savedPartners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPartners = savedPartners.slice(startIndex, endIndex);

  const handleNotForMe = async (partnerId: string) => {
    if (!user?.id) return;

    setRemovingId(partnerId);
    const success = await unsavePartner(user.id, partnerId);

    if (success) {
      if (currentPartners.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }

    setRemovingId(null);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getBadgeInfo = (partner: Partner) => {
    // Show SDG for certain sectors
    if (
      [
        "Food & Beverage",
        "Beverages",
        "Consumer Goods",
        "Furniture & Home",
      ].includes(partner.sector)
    ) {
      return { text: "SDG", class: "sdg" };
    }

    // Show EDG for others
    if (partner.esgPillars && partner.esgPillars.length > 0) {
      return { text: "EDG", class: "edg" };
    }

    return { text: "Badge", class: "badge-default" };
  };

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-regular fa-heart me-2"></i> Your saved Profiles
            </h1>
            <div className="general-icons">
              <i className="fa-solid fa-bell"></i>
              <Link className="text-decoration-none ms-3" to="/messages">
                <i className="fa-regular fa-message message-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`container ${styles["content"]}`}>
        {savedPartners.length === 0 ? (
          <div className={styles["empty-state"]}>
            <p className={styles["empty-icon"]}>
              {" "}
              <i className="fa-solid fa-users"></i>
            </p>
            <h2 className={styles["empty-title"]}>No saved profiles yet</h2>
            <p className={styles["empty-text"]}>
              Start exploring partners and save the ones you're interested in!
            </p>

            <Link
              className={`${styles["explore-btn"]} text-decoration-none`}
              to="/matchmaking"
            >
              Explore Partners
            </Link>
          </div>
        ) : (
          <>
            <div className="row g-5">
              {currentPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="col-12 col-md-6 d-flex justify-content-center"
                >
                  <div
                    className={`card ${styles["partner-card"]} ${
                      removingId === partner.id ? styles["removing"] : ""
                    }`}
                  >
                    <div className={styles["card-img-top-wrapper"]}>
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="card-img-top"
                      />
                      <span
                        className={`${styles["badge"]} ${
                          styles[getBadgeInfo(partner).class]
                        }`}
                      >
                        <i className="fa-solid fa-medal me-2"></i>
                        {getBadgeInfo(partner).text}
                      </span>
                    </div>

                    <div className="card-body">
                      <h3 className={styles["company-name"]}>{partner.name}</h3>
                      <p className={styles["company-description"]}>
                        {partner.description}
                      </p>

                      <div className={styles["action-buttons"]}>
                        <Link
                          className={`${styles["connect-btn"]} text-decoration-none text-center`}
                          to={"/partnership-page"}
                        >
                          Connect
                        </Link>

                        <button
                          className={styles["not-for-me-btn"]}
                          onClick={() => handleNotForMe(partner.id)}
                          disabled={removingId === partner.id}
                        >
                          Not for me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={styles["pagination"]}>
                <button
                  className={styles["pagination-arrow"]}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      className={`${styles["pagination-btn"]} ${
                        currentPage === pageNum ? styles["active"] : ""
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  )
                )}

                <button
                  className={styles["pagination-arrow"]}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
