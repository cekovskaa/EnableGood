import type { PartnershipRequest } from "../types/types";

export const createCalendarEvent = async (data: PartnershipRequest) => {
  const [hour] = data.meetingTime.split(":").map(Number);
  const start = new Date(`${data.meetingDate}T${data.meetingTime}`);
  const end = new Date(start);
  end.setHours(hour + 1); // 1 hour meeting
  
  const accessToken = localStorage.getItem("google_access_token");

  if (!accessToken) {
    throw new Error("Not authenticated. Please connect your Google Calendar.");
  }

  const event = {
    summary: `Partnership Meeting - ${data.companyName}`,
    description: `
      Project Interest: ${data.projectInterest}
      Timeline: ${data.proposedTimeline}
      Goals: ${data.engagementGoals}
      Message: ${data.messageToNGO}
    `,
    start: { dateTime: start.toISOString(), timeZone: "Europe/Skopje" },
    end: { dateTime: end.toISOString(), timeZone: "Europe/Skopje" },
  };

  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create calendar event");
  }

  return response.json();
};
