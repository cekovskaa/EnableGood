import type { ReactNode } from "react";
import AuthSidebar from "../components/ui/AuthSidebar";
import styles from "../styles/ChatLayout.module.css";

interface ChatLayoutProps {
  children: ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className={styles['chat-layout']}>
      <AuthSidebar />
      <div className={styles['chat-container']}>
        {children}
      </div>
    </div>
  );
}