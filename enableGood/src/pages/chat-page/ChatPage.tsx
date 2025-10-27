import { useState } from "react";

import styles from "./ChatPage.module.css";
import type { ChatPageProps, Contact } from "../../types/types";
import { Link } from "react-router-dom";

export default function ChatPage({ contacts, messages }: ChatPageProps) {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    contacts[0] || null
  );
  const [showContactList, setShowContactList] = useState(false);
  const [showOtherMedia, setShowOtherMedia] = useState(false);

  const [showFullProgress, setShowFullProgress] = useState(false);

  const stages = [
    { name: "Stage 1", completed: true },
    { name: "Stage 2", completed: true },
    { name: "Stage 3", completed: true },
    { name: "Stage 4", completed: false },
    { name: "Stage 5", completed: false },
    { name: "Stage 6", completed: false },
  ];

  return (
    <div className={`${styles.chatPage} d-flex h-100`}>
      {/* Messages Sidebar */}
      <div
        className={`${styles.messagesSidebar} ${
          showContactList ? styles.show : ""
        }`}
      >
        <div className={styles.messagesHeader}>
          <div className="d-flex align-items-center">
            <i className="fa-regular fa-message me-3 fs-5"></i>
            <h2 className="mb-0 fs-4 fw-semibold">Messages</h2>
          </div>
        </div>

        <div className={styles.contactsList}>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`${styles.contactItem} ${
                contact.isActive ? styles.active : ""
              } ${selectedContact?.id === contact.id ? styles.selected : ""}`}
              onClick={() => {
                setSelectedContact(contact);
                setShowContactList(false);
              }}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className={styles.contactAvatar}
              />
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{contact.name}</div>
                <div className={styles.contactOrg}>{contact.organization}</div>
                <div className={styles.lastMessage}>{contact.lastMessage}</div>
              </div>
              <div className={styles.timestamp}>{contact.timestamp}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`${styles.chatArea} flex-fill`}>
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className={styles.chatHeader}>
              <button
                className={`${styles.backBtn} d-md-none btn btn-link p-0 me-3`}
                onClick={() => setShowContactList(true)}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                className={styles.chatAvatar}
              />
              <div className={styles.chatUserInfo}>
                <h3 className="mb-0">{selectedContact.name}</h3>
                <span className="text-muted">
                  {selectedContact.organization}
                </span>
              </div>
              <div className={styles.chatActions}>
                <button className="btn btn-link p-2">
                  <i className="fa-solid fa-video"></i>
                </button>
                <button className="btn btn-link p-2">
                  <i className="fa-solid fa-phone"></i>
                </button>
                <button className="btn btn-link p-2">
                  <i className="fa-solid fa-calendar"></i>
                </button>
                <button
                  className={`btn btn-link p-2 d-xl-none`}
                  onClick={() => setShowOtherMedia(true)}
                  title="Other media"
                >
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={styles.messagesContainer}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.messageRow} ${
                    message.isOwn ? styles.own : ""
                  }`}
                >
                  {!message.isOwn && (
                    <img
                      src={message.avatar}
                      alt=""
                      className={styles.messageAvatar}
                    />
                  )}
                  <div
                    className={`${styles.messageBubble} ${
                      message.isOwn ? styles.ownMessage : styles.otherMessage
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className={styles.messageInput}>
              <div className={styles.messageInputBox}>
                <div className="d-flex align-items-center">
                  <button className="btn p-2">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <p className={styles.placeholderText}>Write a message</p>
                </div>

                <div className="">
                  <button className="btn p-2">
                    <i className="fa-solid fa-microphone"></i>
                  </button>
                  <button className="btn p-2">
                    <i className="fa-regular fa-image"></i>
                  </button>
                  <button className="btn p-2">
                    <i className="fa-solid fa-photo-film"></i>
                  </button>
                  <button className="btn p-2">
                    <i className="fa-solid fa-file"></i>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className={`${styles.emptyState} d-flex align-items-center justify-content-center h-100`}
          >
            <div className="text-center text-muted">
              <i className="fa-regular fa-message fs-1 mb-3"></i>
              <h3>Select a conversation</h3>
              <p>Choose a contact to start messaging</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className={`${styles.rightSidebar} d-none d-xl-block`}>
        <div className={styles.sidebarSection}>
          <h4 className="mb-3">Other media</h4>
        </div>

        <div className={styles.sidebarSection}>
          <h5 className="mb-3">Ongoing project progress</h5>
          <div className={styles.progressItem}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-medium">Pathways Out</span>
            </div>

            <div
              className={`${styles.progressWrapper} d-flex align-items-center`}
            >
              <span className="small text-muted me-2">20%</span>
              <div className="progress flex-grow-1" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>

            {/* Expandable Stages Section */}
            {showFullProgress && (
              <div className={styles.stagesContainer}>
                {stages.map((stage, index) => (
                  <div key={index} className={styles.stageItem}>
                    <div
                      className={`${styles.stageDot} ${
                        stage.completed ? styles.completed : styles.incomplete
                      }`}
                    ></div>
                    <span
                      className={`${styles.stageName} ${
                        stage.completed
                          ? styles.completedText
                          : styles.incompleteText
                      }`}
                    >
                      {stage.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <button
              className={styles["btn-progress"]}
              onClick={() => setShowFullProgress(!showFullProgress)}
            >
              {showFullProgress ? "See less" : "See full progress"}
              <i
                className={`fa-solid ${
                  showFullProgress ? "fa-arrow-up" : "fa-arrow-down"
                } ms-1`}
              ></i>
            </button>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <h5 className="mb-3">Attachments</h5>
          <div className={styles.attachmentItem}>
            <img
              src="/src/assets/images-account/attachement1.png"
              alt="Attachment image"
              className={styles.attachmentThumb}
            />
            <div className={styles.attachmentInfo}>
              <p className="mb-1 text-black">Attachment 1</p>
              <span className="text-muted small">Time & date</span>
            </div>
          </div>
          <div className={styles.attachmentItem}>
            <img
              src="/src/assets/images-account/attachement2.png"
              alt="Attachment image"
              className={styles.attachmentThumb}
            />
            <div className={styles.attachmentInfo}>
              <p className="mb-1 text-black">Attachment 2</p>
              <span className="text-muted small">Time & date</span>
            </div>
          </div>
          <div className={styles.attachmentItem}>
            <img
              src="/src/assets/images-account/attachement3.png"
              alt="Attachment image"
              className={styles.attachmentThumb}
            />
            <div className={styles.attachmentInfo}>
              <p className="mb-1 text-black">Attachment 3</p>
              <span className="text-muted small">Time & date</span>
            </div>
          </div>
          <button className={styles["btn-white"]}>
            See all attachments <i className="fa-solid fa-arrow-down ms-1"></i>
          </button>
        </div>

        <div className={styles.sidebarSection}>
          <h5 className="mb-3">Scheduled events</h5>
          <div className={styles.eventItem}>
            <p className="text-black mb-0">Follow up meeting</p>
            <span className="text-muted">12 April 2025 at 20:00</span>
          </div>
          <div className={styles.eventItem}>
            <p className="text-black mb-0">Follow up meeting</p>
            <span className="text-muted">12 April 2025 at 20:00</span>
          </div>

          <Link
            className={`${styles["btn-white"]} text-decoration-none`}
            to="/calendar"
          >
            See all scheduled events{" "}
            <i className="fa-solid fa-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>

      {/* Mobile Other Media Panel */}
      {showOtherMedia && (
        <div className={`${styles.mobileMediaPanel} d-xl-none`}>
          <div className={styles.mediaPanelHeader}>
            <h4 className="fs-5 fw-semibold mb-0">Other media</h4>
            <button
              className="btn btn-link p-0"
              onClick={() => setShowOtherMedia(false)}
            >
              <i className="fa-solid fa-xmark fs-4"></i>
            </button>
          </div>

          <div className={styles.mediaPanelContent}>
            <div className={styles.sidebarSection}>
              <h5 className="mb-3">Ongoing project progress</h5>
              <div className={styles.progressItem}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-medium">Pathways Out</span>
                </div>

                <div
                  className={`${styles.progressWrapper} d-flex align-items-center`}
                >
                  <span className="small text-muted me-2">20%</span>
                  <div
                    className="progress flex-grow-1"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>

                {/* Expandable Stages Section */}
                {showFullProgress && (
                  <div className={styles.stagesContainer}>
                    {stages.map((stage, index) => (
                      <div key={index} className={styles.stageItem}>
                        <div
                          className={`${styles.stageDot} ${
                            stage.completed
                              ? styles.completed
                              : styles.incomplete
                          }`}
                        ></div>
                        <span
                          className={`${styles.stageName} ${
                            stage.completed
                              ? styles.completedText
                              : styles.incompleteText
                          }`}
                        >
                          {stage.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  className={styles["btn-progress"]}
                  onClick={() => setShowFullProgress(!showFullProgress)}
                >
                  {showFullProgress ? "See less" : "See full progress"}
                  <i
                    className={`fa-solid ${
                      showFullProgress ? "fa-arrow-up" : "fa-arrow-down"
                    } ms-1`}
                  ></i>
                </button>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h5 className="fs-6 fw-semibold mb-3">Attachments</h5>
              <div className={styles.attachmentItem}>
                <img
                  src="/src/assets/images-account/attachement1.png"
                  alt="Attachment image"
                  className={styles.attachmentThumb}
                />
                <div className={styles.attachmentInfo}>
                  <p className="mb-1 text-black">Attachment 1</p>
                  <span className="text-muted small">Time & date</span>
                </div>
              </div>
              <div className={styles.attachmentItem}>
                <img
                  src="/src/assets/images-account/attachement2.png"
                  alt="Attachment image"
                  className={styles.attachmentThumb}
                />
                <div className={styles.attachmentInfo}>
                  <p className="mb-1 text-black">Attachment 2</p>
                  <span className="text-muted small">Time & date</span>
                </div>
              </div>
              <div className={styles.attachmentItem}>
                <img
                  src="/src/assets/images-account/attachement3.png"
                  alt="Attachment image"
                  className={styles.attachmentThumb}
                />
                <div className={styles.attachmentInfo}>
                  <p className="mb-1 text-black">Attachment 3</p>
                  <span className="text-muted small">Time & date</span>
                </div>
              </div>
              <button className={styles["btn-white"]}>
                See all attachments{" "}
                <i className="fa-solid fa-arrow-down ms-1"></i>
              </button>
            </div>

            <div className={styles.sidebarSection}>
              <h5 className="fs-6 fw-semibold mb-3">Scheduled events</h5>
              <div className={styles.eventItem}>
                <p className="text-black mb-0">Follow up meeting</p>
                <span className="text-muted">12 April 2025 at 20:00</span>
              </div>
              <div className={styles.eventItem}>
                <p className="text-black mb-0">Follow up meeting</p>
                <span className="text-muted">12 April 2025 at 20:00</span>
              </div>
              <Link
                className={`${styles["btn-white"]} text-decoration-none`}
                to="/calendar"
              >
                See all scheduled events{" "}
                <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
