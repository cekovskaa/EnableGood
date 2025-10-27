import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Profile from "../../pages/profile/Profile";
import AuthLayout from "../../layouts/AuthLayout";
import ContentOnlyLayout from "../../layouts/ContentOnlyLayout";
import ChatLayout from "../../layouts/ChatLayout";
import CurrentProjects from "../../pages/current-projects/CurrentProjects";
import LearningHub from "../../pages/learning-hub-account/LearningHub";
import ChatPage from "../../pages/chat-page/ChatPage";
import { contacts, messages } from "../../data/chat-info";
import CalendarPage from "../../pages/calendar/CalendarPage";
import PartnershipRequestPage from "../../pages/partnershipPage/PartnershipRequestPage";
import RequestSuccess from "../../pages/partnershipPage/RequestSuccess";
import ImpactReports from "../../pages/impact-reports/ImpactReports";
import StatisticsPage from "../../pages/statistics-page/StatisticsPage";
import { MatchmakingPage } from "../../pages/matchmaking-page/MatchmakingPage";
import { SavedProfilesPage } from "../../pages/saved-profiles-page/SavedProfilesPage";
import ExplorePage from "../../pages/explore-account/ExplorePage";
import ProjectOverview from "../../pages/project-overview/ProjectOverview";
import ProfilePartnerPage from "../../pages/profile-page-partner/ProfilePartnerPage";
import VerificationSteps from "../../pages/verification/VerificationSteps";
import VerificationFirstStep from "../../pages/verification/verification-steps/VerificationFirstStep";
import VerificationSecondStep from "../../pages/verification/verification-steps/VerificationSecondStep";
import VerificationThirdStep from "../../pages/verification/verification-steps/VerificationThirdStep";

const AuthorizedRoutes = () => {
  const location = useLocation();

  // Pages that use ContentOnlyLayout (no container-wrapper)
  const contentOnlyPaths = [
    "/learning-hub",
    "/request-success",
    "/profile",
    "/profile-page",
    "/verification",
    "/verification/first-step",
    "/verification/second-step",
    "/verification/third-step",
  ];
  const isContentOnly = contentOnlyPaths.includes(location.pathname);
  const isChatPage = location.pathname === "/messages";

  const Layout = isChatPage
    ? ChatLayout
    : isContentOnly
    ? ContentOnlyLayout
    : AuthLayout;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/current-projects" element={<CurrentProjects />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/partnership-page" element={<PartnershipRequestPage />} />
        <Route path="/learning-hub" element={<LearningHub />} />
        <Route path="/request-success" element={<RequestSuccess />} />
        <Route path="/impact-reports" element={<ImpactReports />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/matchmaking" element={<MatchmakingPage />} />
        <Route path="/saved-profiles" element={<SavedProfilesPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/project-overview/:id" element={<ProjectOverview />} />
        <Route path="/profile-page" element={<ProfilePartnerPage />} />
        <Route path="/verification" element={<VerificationSteps />} />
        <Route
          path="/verification/first-step"
          element={<VerificationFirstStep />}
        />
        <Route
          path="/verification/second-step"
          element={<VerificationSecondStep />}
        />
        <Route
          path="/verification/third-step"
          element={<VerificationThirdStep />}
        />

        <Route
          path="/messages"
          element={<ChatPage contacts={contacts} messages={messages} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Layout>
  );
};

export default AuthorizedRoutes;
