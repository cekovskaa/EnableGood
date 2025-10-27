import type { ReactNode } from "react";
import AuthSidebar from "../components/ui/AuthSidebar";
import styles from "../styles/AuthLayout.module.css";

interface LearningHubLayoutProps {
  children: ReactNode;
}

export default function ContentOnlyLayout({
  children,
}: LearningHubLayoutProps) {
  return (
    <div className={styles["auth-layout"]}>
      <AuthSidebar />
      <main className={styles["main-content"]}>{children}</main>
    </div>
  );
}
