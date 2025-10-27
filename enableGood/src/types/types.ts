export interface CallToActionProps {
  paragraph: string;
  primaryButton: {
    text: string;
    to: string;
  };
  showFirms?: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  description: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  statistic?: {
    value: string;
    label: string;
  };
}

export interface ContentBlockProps {
  heading: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageClassName: string;
  imageOnRight?: boolean;
  className?: string;
}

export interface FirmsProps {
  isBlackLogos?: boolean;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  overview?: string; // Add this line
  impact: string[];
  esgGoals: string[];
  sdgGoals: string[];
  industry: string;
  projectType: string;
  partnerType: string;
  partners: string[];
  // New fields for project overview
  location?: string;
  startDate?: string;
  estimatedCompletion?: string;
  teamContacts?: {
    name: string;
    role: string;
    organization: string;
  }[];
  heroImage?: string;
}

export interface PopupOverlayProps {
  show: boolean;
  onClose: () => void;
  heading?: string;
  message?: string;
}

export interface Recommendation {
  id: number;
  image: string;
  badgeClass: string;
}

export interface NewProject {
  id: number;
  imageSrc: string;
  tagText: string;
  tagClass: string;
  title: string;
  description: string;
}

export interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export interface Contact {
  id: string;
  name: string;
  organization: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isActive?: boolean;
}

export interface ChatPageProps {
  contacts: Contact[];
  messages: Message[];
}

export interface PartnershipRequest {
  companyName: string;
  projectInterest: string;
  proposedTimeline: string;
  engagementGoals: string;
  messageToNGO: string;
  meetingDate: string;
  meetingTime: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  sector: string;
  country: string;
  description: string;
  matchingRate: number;
  sdgs: string[];
  esgPillars: string[];
  partnerType: "Company" | "NGO" | "Government" | "Academic";
  website?: string;
  mission?: string;
  lookingFor?: string[];
  achievements?: string[];
  contactEmail?: string;
}

export interface UserFilters {
  esg: string;
  sdg: string;
  industry: string;
  projectType: string;
  partner: string;
}

export interface ProjectCardVariant {
  variant: "unauthorized" | "authorized";
  isClickable?: boolean;
  onClick?: (project: Project) => void;
}

export interface CarouselProps {
  items: Project[];
  variant: "unauthorized" | "authorized";
  onProjectClick?: (project: Project) => void;
}
