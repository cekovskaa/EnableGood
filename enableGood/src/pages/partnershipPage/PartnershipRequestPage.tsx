import { Link, useNavigate } from "react-router-dom";
import styles from "./PartnershipRequest.module.css";
import "../../styles/AccountStyles.css";
import React, { useState, useEffect } from "react";
import { createCalendarEvent } from "../../utils/googleCalendar";

export default function PartnershipRequestPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    projectInterest: "",
    proposedTimeline: "",
    engagementGoals: "",
    messageToNGO: "",
    meetingDate: "",
    meetingTime: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("google_access_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert(
        "You must connect your Google Calendar first! Go to the Calendar page to log in."
      );
      return;
    }

    try {
      await createCalendarEvent(formData);
      navigate("/request-success");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="general-section">
      <div className="row mb-0 mb-md-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-regular fa-file-image me-2"></i> Partnership
              request
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

      <div className="pt-5">
        <div className="row">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start">
            <img
              src="/src/assets/images-account/partnership-logo.png"
              alt="Partnership logo"
              className={styles["partnership-logo"]}
            />
            <div className="mt-3">
              <h5 className="text-center mt-5 mb-3">Gallery</h5>
              <div className={styles["gallery-container"]}>
                <img
                  src="/src/assets/images-account/partnership-img1.png"
                  alt="Partnership image"
                  className={styles["gallery-image"]}
                />
                <img
                  src="/src/assets/images-account/partnership-img2.png"
                  alt="Partnership image"
                  className={styles["gallery-image"]}
                />
                <img
                  src="/src/assets/images-account/partnership-img3.png"
                  alt="Partnership image"
                  className={styles["gallery-image"]}
                />
                <img
                  src="/src/assets/images-account/partnership-img4.png"
                  alt="Partnership image"
                  className={styles["gallery-image"]}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 mt-5 mt-md-0">
            <div className={styles["partnership-p"]}>
              <p className="mb-4">
                In 2023, Médecins Sans Frontières deployed over 69,000 staff
                across more than 70 countries, delivering essential medical care
                to millions in conflict zones, disaster areas, and regions
                grappling with epidemics.
              </p>
              <p className="mb-0">
                Guided by the principle of providing aid “regardless of race,
                religion, creed or political convictions,” Doctors Without
                Borders remains a global leader in impartial, ethical
                humanitarian action.
              </p>
            </div>
            <div className={`${styles["partnership-form-container"]} pb-4`}>
              <h3 className="mb-5">
                Connect with <span>Doctors without Borders!</span>
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    className={`${styles["custom-input"]} form-control`}
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className={`${styles["custom-input"]} form-control`}
                    id="projectInterest"
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleChange}
                    placeholder="Project Interest"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className={`${styles["custom-input"]} form-control`}
                    id="proposedTimeline"
                    name="proposedTimeline"
                    value={formData.proposedTimeline}
                    onChange={handleChange}
                    placeholder="Proposed Timeline"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className={`${styles["custom-input"]} form-control`}
                    id="engagementGoals"
                    name="engagementGoals"
                    value={formData.engagementGoals}
                    onChange={handleChange}
                    placeholder="Engagement Goals"
                    required
                  />
                </div>

                <div className="pb-2">
                  <textarea
                    className={`${styles["custom-input"]} form-control`}
                    name="messageToNGO"
                    id="messageToNGO"
                    value={formData.messageToNGO}
                    onChange={handleChange}
                    placeholder="Message to NGO"
                    required
                  />
                </div>

                <div className="mb-3 mt-5">
                  <p className={styles["custom-label"]}>Schedule a Meeting</p>
                  <div className="row justify-content-center justify-content-md-start">
                    <div className="col-6 col-md-4">
                      <input
                        type="date"
                        className="form-control"
                        id="meetingDate"
                        name="meetingDate"
                        value={formData.meetingDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6 col-md-3">
                      <input
                        type="time"
                        className="form-control"
                        id="meetingTime"
                        name="meetingTime"
                        value={formData.meetingTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-2 gap-md-4 mt-5">
                  <Link
                    className={`${styles["dashboard-btn"]} ${styles["custom-btn"]} text-decoration-none text-center`}
                    to="/dashboard"
                  >
                    Back to Dashboard
                  </Link>

                  <button
                    className={`${styles["request-btn"]} ${styles["custom-btn"]}`}
                    type="submit"
                    disabled={!isAuthenticated}
                  >
                    Send Request
                  </button>
                </div>
              </form>
              {!isAuthenticated && (
                <p style={{ color: "red", marginBottom: "10px" }}>
                  You must be logged in to Google Calendar to send a request.{" "}
                  <a href="/calendar">Click here to connect your calendar.</a>
                </p>
              )}
            </div>
            <p className={`${styles["small-p"]} mt-5`}>
              Your details are shared only with this organization and stored
              securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
