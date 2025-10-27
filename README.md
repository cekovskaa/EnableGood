<div align="center">
  <img src="/enableGood/public/images/Logo.png" alt="Enable Good Logo" width="200" height="50">

</div>

<div align="start">
  <h1>Enable Good</h1>
</div>

A comprehensive web application platform that connects companies with other companies and nonprofit organizations (NGOs) to facilitate collaboration on projects, partnership requests, and meaningful connections in the social impact space.

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation & Setup

1. **Clone the repository**

2. **Navigate to project folder**

   ```bash
   cd enableGood
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

5. **Start the JSON Server**
   ```bash
   npm run server
   ```

The backend API will be available at `http://localhost:5001`

- **Base URL:** `http://localhost:5001`
- **Users endpoint:** `http://localhost:5001/users`

## Platform Overview

Enable Good serves as a bridge between:

- **Companies** seeking to make social impact
- **NGOs** looking for corporate partnerships
- **Organizations** wanting to collaborate on meaningful projects

### Key Features

#### **User Management**

- User login/logout system
- Google Calendar integration for scheduling events
- Role-based access control (authorized/unauthorized routes)

➡️ [Calendar Page](/enableGood/public/screenshots/calendar-screenshot.png)

➡️ [Login Page](/enableGood/public/screenshots/login-page-screenshot.png)

#### **Onboarding Process**

- Multi-step guided onboarding for new users
- Company information collection
- Partnership goals and preferences setup
- ESG (Environmental, Social, Governance) selection
- SDG (Sustainable Development Goals) selection

➡️ [Onboarding Process](/enableGood/public/screenshots/onboarding-process-screenshot.png)

#### **Matchmaking**

- Browse and discover potential partners
- Save partners to your favorites list
- View saved partners in a dedicated section
- Remove partners from saved list
- Connect with partners directly through the platform

➡️ [Matchmaking Page](/enableGood/public/screenshots/matchmaking-screenshot.png)

➡️ [Saved Partners Page](/enableGood/public/screenshots/Saved-profiles-screenshot.png)

#### **Explore**

- Filtering by ESG, SDGs, projects, industries, and partner types
- Project overview and detailed information
- Connect with project owners
- Quick access to project details

➡️ [Explore Page User](/enableGood/public/screenshots/explore-account-screenshot.png)

#### **Project Management**

- Impact reporting and analytics
- Partnership request management

➡️ [Impact Reports Page](/enableGood/public/screenshots/impact-reports-screenshot.png)

➡️ [Partnership Request Page](/enableGood/public/screenshots/partnership-request-screenshot.png)

#### **Analytics & Reporting**

- Interactive charts and statistics using Highcharts library
- Impact measurement tools
- Progress tracking dashboards

➡️ [Statistics Page](/enableGood/public/screenshots/statistics-screenshot.png)

#### **Verification System**

- Multi-tier certification process (Bronze, Silver, Gold)
- Document upload and verification

## Technology Stack

### **Frontend Framework**

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing

### **State Management**

- **Zustand** for global state management
- Lightweight and performant store for user authentication and application state

### **Styling & UI**

- **Bootstrap 5** for responsive grid system and components
- **CSS Modules** for component-scoped styling
- **FontAwesome** for icons
- **Responsive design** for desktop, laptop, and mobile devices

### **Calendar Integration**

- **Google Calendar API** integration
- OAuth authentication for Google services
- Seamless scheduling and event management

### **Backend & Database**

- **JSON Server** for RESTful API simulation
- **db.json** file for user and project data storage
- RESTful API endpoints for CRUD operations

## Architecture

### **Routing System**

- **Authorized Routes**: Protected pages for logged-in users

  - Dashboard
  - Current Projects
  - Calendar
  - Matchmaking
  - Explore
  - Learning Hub
  - Impact Reports
  - Statistics
  - User profile
  - Partnership connect
  - Messages

- **Unauthorized Routes**: Public pages for marketing and discovery
  - Landing Page
  - Learning page
  - Impact Reporting
  - About Us
  - Onboarding Process
  - Login/Registration

### **Component Structure**

- **Reusable Components**: Modular UI components throughout the application
- **Layout Components**: Consistent page layouts and navigation
- **Feature Components**: Specialized components for specific functionality

### **Services Layer**

- **Authentication Service**: User login, registration, and profile management
- **API Services**: Communication with backend services
- **Google Calendar Service**: Calendar integration and event management

## Key Features by Page

### **Landing Page**

- Hero section with platform overview
- Company testimonials and success stories
- Call-to-action for registration
- Subscription Cards

➡️ [Landing Page](/enableGood/public/screenshots/landing-page-screenshot.png)

### **Account Dashboard**

- User homepage
- Recent activity and notifications
- Quick access to key features
- Share impact functionality
- Statistics

➡️ [Account Dashboard](/enableGood/public/screenshots/dashboard-screenshot.png)

### **Explore Page**

- Project discovery with advanced filtering
- Different views for authorized/unauthorized users
- Carousel navigation for logged-in users

➡️ [Explore Page](/enableGood/public/screenshots/explore-page-screenshot.png)

### **Profile Management**

- Complete user information editing
- Verification status and badge display
- Billing display and information

➡️ [User Profile Page](/enableGood/public/screenshots/profile-page-screenshot.png)

### **Verification Process**

- Step-by-step verification guide
- Document upload system
- Certification tier information
- Progress tracking

➡️ [Verification Process](/enableGood/public/screenshots/verification-process-screenshot.png)

## Credits

- **Design:** provided by Brainster Frontend Academy - figma design
- **Icons and images** provided by figma design hackaton

**Enable Good** - Connecting companies and NGOs for meaningful social impact collaboration.