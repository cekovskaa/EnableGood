import type { Contact, Message } from "../types/types";

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Porsche",
    organization: "Automobile industry",
    avatar: "/src/assets/images-account/add-img3.png",
    lastMessage: "Keep your messages short, but make su...",
    timestamp: "12 April 2024",
    isActive: true,
  },
  {
    id: "2",
    name: "Organisation",
    organization: "Field",
    avatar: "/src/assets/images-account/contact2-img.png",
    lastMessage: "Keep your messages short, but make su...",
    timestamp: "12 April 2024",
  },
  {
    id: "3",
    name: "Green Solutions",
    organization: "Environmental",
    avatar: "/src/assets/images-account/contact3-img.png",
    lastMessage: "Thanks for the update on the project...",
    timestamp: "11 April 2024",
  },
  {
    id: "4",
    name: "Tech Corp",
    organization: "Technology",
    avatar: "/src/assets/images-account/contact4-img.png",
    lastMessage: "Let's schedule a meeting for next week...",
    timestamp: "10 April 2024",
  },
  {
    id: "5",
    name: "Social Impact Inc",
    organization: "Non-profit",
    avatar: "/src/assets/images-account/contact5-img.png",
    lastMessage: "The partnership proposal looks great!",
    timestamp: "09 April 2024",
  },
  {
    id: "6",
    name: "Project Impact Inc",
    organization: "Non-profit",
    avatar: "/src/assets/images-account/contact6-img.png",
    lastMessage: "The partnership proposal looks great!",
    timestamp: "08 April 2024",
  },
  {
    id: "7",
    name: "Project Inc",
    organization: "Non-profit",
    avatar: "/src/assets/images-account/user-img.png",
    lastMessage: "The partnership proposal looks great!",
    timestamp: "07 April 2024",
  },

  {
    id: "8",
    name: "Project  Inc",
    organization: "Non-profit",
    avatar: "/src/assets/images-account/user-img.png",
    lastMessage: "The partnership proposal looks great!",
    timestamp: "06 April 2024",
  },
];

export const messages: Message[] = [
  {
    id: "1",
    sender: "You",
    avatar: "/api/placeholder/32/32",
    content:
      "Lorem ipsum proin massa proin eget dui felis malesuada ut donec massa amet at tortor arcu morbi euismod et viverra.",
    timestamp: "10:30",
    isOwn: true,
  },
  {
    id: "2",
    sender: "Porsche",
    avatar: "/src/assets/images-account/add-img3.png",
    content:
      "Lorem ipsum proin massa proin eget dui felis molestuduo ut donec massa amet at tortor arcu morbi euismod et viverra.",
    timestamp: "10:32",
    isOwn: false,
  },
  {
    id: "3",
    sender: "You",
    avatar: "/api/placeholder/32/32",
    content:
      "Lorem ipsum in placerat tristique bibendum semper feugiat dignissim cursus ut morbi nisi eget elit.",
    timestamp: "10:35",
    isOwn: true,
  },
  {
    id: "4",
    sender: "Porsche",
    avatar: "/src/assets/images-account/add-img3.png",
    content:
      "Lorem ipsum proin massa proin eget dui felis malesuada ut donec massa amet at tortor arcu.",
    timestamp: "10:37",
    isOwn: false,
  },
  {
    id: "5",
    sender: "You",
    avatar: "/api/placeholder/32/32",
    content: "Lorem ipsum! Proin massa eget dui.",
    timestamp: "10:38",
    isOwn: true,
  },
];
