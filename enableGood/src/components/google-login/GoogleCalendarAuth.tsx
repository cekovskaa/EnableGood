import { useEffect, useState } from "react";
import "../../styles/AccountStyles.css";

const GoogleCalendarAuth = () => {
  const CLIENT_ID =
    "393207381831-jqnpltan00lsn1nfn982gch4civ098fo.apps.googleusercontent.com";
  const [gsiLoaded, setGsiLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      console.log("GSI script loaded");
      setGsiLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  const handleConnect = () => {
    if (!gsiLoaded || !(window as any).google?.accounts?.oauth2) {
      alert("Google script not loaded yet. Please try again.");
      return;
    }

    const tokenClient = (window as any).google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: "https://www.googleapis.com/auth/calendar.events",
      callback: (response: any) => {
        if (response.access_token) {
          localStorage.setItem("google_access_token", response.access_token);
          alert("Google Calendar connected!");
          window.location.reload();
        } else {
          console.error("No access token received", response);
        }
      },
    });

    tokenClient.requestAccessToken();
  };

  return (
    <button
      className="connect-to-calendar"
      onClick={handleConnect}
      style={{ padding: "10px 20px", cursor: "pointer" }}
    >
      Connect Google Calendar
    </button>
  );
};

export default GoogleCalendarAuth;
