import { Routes, Route } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import AboutUsPage from "../../pages/about/AboutUSPage";
import LearnMorePage from "../../pages/learnMorePage/LearnMorePage";
import Explore from "../../pages/explore/Explore";
import ImpactReport from "../../pages/impact-reporting/ImpactReporting";
import CompanyProfile from "../../pages/company-profile/CompanyProfile";
import RoleSelection from "../../pages/onboarding/RoleSelection";
import CompanyDetails from "../../pages/onboarding/CompanyDetails";
import Preferences from "../../pages/onboarding/Preferences";
import Documents from "../../pages/onboarding/Documents";
import Subscription from "../../pages/onboarding/Subscription";
import SubscriptionPlanLeader from "../../pages/onboarding/SubscriptionPlanLeader";
import WelcomeAboard from "../../pages/onboarding/WelcomeAboard";
import PublicLayout from "../../layouts/PublicLayout";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import MinimalLayout from "../../layouts/MinimalLayout";
import OnboardingError from "../../pages/onboarding/OnboardingError";

const UnauthorizedRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/impact-reporting" element={<ImpactReport />} />
        <Route path="/profile-page" element={<CompanyProfile />} />
      </Route>

      {/* Onboarding routes */}
      <Route element={<OnboardingLayout />}>
        <Route path="/onboarding/role" element={<RoleSelection />} />
        <Route path="/onboarding/details" element={<CompanyDetails />} />
        <Route path="/onboarding/preferences" element={<Preferences />} />
        <Route path="/onboarding/documents" element={<Documents />} />
        <Route path="/onboarding/subscription" element={<Subscription />} />
        <Route
          path="/onboarding/subscription-plan/:planName"
          element={<SubscriptionPlanLeader />}
        />
      </Route>

      {/* Minimal layout route for transition welcome page*/}
      <Route element={<MinimalLayout />}>
        <Route path="/onboarding/welcome" element={<WelcomeAboard />} />
        <Route path="/onboarding-error" element={<OnboardingError />} />
      </Route>
    </Routes>
  );
};

export default UnauthorizedRoutes;
