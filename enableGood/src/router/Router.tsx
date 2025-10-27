import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "../pages/auth/LoginPage";
import AuthorizedRoutes from "./authorized-routes/AuthorizedRoutes";
import UnauthorizedRoutes from "./unauthorized-routes/UnauthorizedRoutes";

const CLIENT_ID =
  "393207381831-jqnpltan00lsn1nfn982gch4civ098fo.apps.googleusercontent.com";

const Router = () => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <GoogleOAuthProvider clientId={CLIENT_ID}>
              <AuthorizedRoutes />
            </GoogleOAuthProvider>
          ) : (
            <UnauthorizedRoutes />
          )
        }
      />
    </Routes>
  );
};

export default Router;
