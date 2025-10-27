import { Link } from "react-router-dom";
import GoogleCalendarAuth from "../../components/google-login/GoogleCalendarAuth";
import GoogleCalendar from "../../components/ui/GoogleCalendar";
import "../../styles/AccountStyles.css";

export default function CalendarPage() {
  return (
    <div className="general-section">
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-solid fa-calendar-days me-2"></i> Calendar
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
      <GoogleCalendar />

     <p className="mt-4 fw-bold text-small">Please connect to google calendar *</p>
      <GoogleCalendarAuth />
    </div>
  );
}
