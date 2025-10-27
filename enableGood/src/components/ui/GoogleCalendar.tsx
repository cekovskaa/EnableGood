import "../../styles/AccountStyles.css";

export default function GoogleCalendar() {
  return (
    <iframe
      className="google-calendar-iframe"
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBelgrade&showTitle=0&mode=MONTH&showPrint=0&src=Y2Vrb3Zza2EuYW5nZWxhQGdtYWlsLmNvbQ&color=%237986cb"
      style={{ border: "none" }}
      width="100%"
      scrolling="no"
    ></iframe>
  );
}
