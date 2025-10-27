import type { ReactNode } from "react";
import AuthSidebar from "../components/ui/AuthSidebar";
import styles from "../styles/AuthLayout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles['auth-layout']}>
      <AuthSidebar />
      <main className={styles['main-content']}>
        <div className={styles['content-wrapper']}>
          {children}
        </div>
      </main>
    </div>
  );
}