# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Smart Applicant Tracking System

A modern Applicant Tracking System (ATS) built with React.js. This project simulates a real-world recruitment platform where candidates can search and apply for jobs, while recruiters can manage job postings and applications.

## Tech Stack

- React.js
- Vite
- React Router DOM
- Axios
- React Hook Form
- Yup
- React Toastify
- React Icons
- JWT Decode

## Project Structure

```
src/
├── api/
├── assets/
├── components/
├── config/
├── constants/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── styles/
└── utils/
```

## Folder and Purpose

| Folder       | Purpose                                       |
| ------------ | --------------------------------------------- |
| `api`        | Axios instance and API endpoint configuration |
| `assets`     | Images, icons, fonts, SVGs                    |
| `components` | Reusable UI components                        |
| `config`     | Application configuration                     |
| `constants`  | Application-wide constants                    |
| `context`    | React Context providers                       |
| `hooks`      | Custom React hooks                            |
| `layouts`    | Shared layouts (Dashboard, Auth, etc.)        |
| `pages`      | Route-level pages                             |
| `routes`     | React Router configuration                    |
| `services`   | Business logic and API service functions      |
| `styles`     | Global CSS and styling files                  |
| `utils`      | Utility/helper functions                      |



## Features (Planned)

- Authentication
- Role-based Dashboard
- Job Listings
- Job Search & Filters
- Resume Upload
- Candidate Dashboard
- Recruiter Dashboard
- Protected Routes
- Form Validation
- REST API Integration
- Toast Notifications
- Responsive UI

## Application Layout

The application uses two primary layouts:

### DashboardLayout

Used for authenticated pages.

Includes:

- Navbar
- Sidebar
- Main Content
- Footer

### AuthLayout

Used for authentication pages such as:

- Login
- Register
- Forgot Password

This keeps authentication screens separate from the main application interface and promotes reusable layout components.

## Pages

The project includes the following route-level pages:

- Login
- Signup
- Dashboard
- Jobs
- Profile
- Not Found (404)

Authentication pages use `AuthLayout`, while protected application pages use `MainLayout` to maintain a consistent user interface.


## Authentication Module

The application includes a complete authentication user interface built with reusable components.

### Screens

- Login
- Signup
- Forgot Password
- Reset Password

### Technologies

- React Hook Form
- Yup Validation
- React Toastify (prepared for notifications)

Authentication logic and backend integration will be implemented in a later phase.


## Form Validation

Authentication forms use:

- React Hook Form
- Yup
- @hookform/resolvers

### Features

- Reusable validation schemas
- Client-side validation
- Inline error messages
- Password confirmation validation
- Minimal re-renders for better performance

## API Configuration

The project uses a centralized Axios instance.

### Features

- Base URL from environment variables
- JSON request headers
- Request interceptor for JWT authentication
- Response interceptor for global error handling
- Configurable timeout

Environment variables are managed using Vite's `.env` files.


## Authentication

Authentication is implemented using a dedicated service layer and centralized state management.

### Features

- Login
- Signup
- Logout
- Refresh Token support
- JWT decoding
- Persistent authentication state
- Axios request/response interceptors

### Architecture

```
UI
   ↓
Auth Context
   ↓
Auth Service
   ↓
Axios Instance
   ↓
REST API
```

## Global State Management

The application uses React Context API for global state management.

### Contexts

- **AuthContext** – Authentication and session management
- **ThemeContext** – Light/Dark mode
- **UserContext** – User profile and preferences

### Architecture

```
AppProvider
├── AuthProvider
├── ThemeProvider
└── UserProvider
```

Custom hooks (`useAuth`, `useTheme`, `useUser`) are used to simplify context consumption throughout the application.

## Routing & Authorization

The application uses React Router with route guards.

### Features

- Protected Routes
- Public Routes
- JWT Authentication
- Role-Based Authorization
- Unauthorized (403) Page
- Automatic Redirect After Login

### Supported Roles

- Admin
- Recruiter
- Candidate

## Candidate Dashboard

The Candidate Dashboard is built using reusable React components.

### Features

- Sidebar Navigation
- Dashboard Statistics Cards
- Recent Applications
- Profile Summary
- Responsive Layout

### Component Architecture

```
Dashboard
├── DashboardHeader
├── StatisticsSection
│   └── DashboardCard
├── RecentApplications
└── ProfileSummary
```

Statistics are currently rendered from local constants and are designed to be replaced by API responses in future iterations.

## Candidate Profile Management

The application includes a modular candidate profile management system.

### Features

- Profile Overview
- Personal Information
- Skills
- Experience
- Education
- Edit Profile
- Profile Completion Indicator

### Component Structure

```
Profile
├── ProfileHeader
├── PersonalInfo
├── SkillsSection
├── ExperienceSection
├── EducationSection
└── EditProfileModal
```

The module is designed for easy integration with backend profile APIs.


## Resume Upload

Candidates can upload and manage their resumes through a reusable upload module.

### Features

- Drag & Drop Upload
- Browse File Upload
- PDF, DOC, DOCX Support
- File Validation
- Resume Preview
- Upload Progress
- Replace and Remove Resume

### Architecture

```
Profile
└── ResumeUpload
    ├── DropZone
    ├── ResumePreview
    ├── UploadProgress
    └── ResumeActions
```

The upload module is built using reusable components and is ready for backend integration using `multipart/form-data`.

## Jobs Module

The Jobs module provides a reusable architecture for displaying and managing job listings.

### Features

- Job Listing
- Reusable Job Card
- Job Details
- Company Details
- Apply Button
- API-ready Service Layer

### Architecture

```
Jobs
├── JobList
│   └── JobCard
└── JobDetails
    ├── CompanyDetails
    └── ApplyButton
```

Mock data is currently used and will be replaced with backend API integration in later phases.

## Job Search & Filtering

The Jobs module includes advanced client-side filtering and sorting.

### Features

- Keyword Search
- Filter by Location
- Filter by Job Type
- Filter by Experience
- Filter by Salary Range
- Sort Jobs
- Active Filter Chips
- Clear All Filters

### Architecture

```
Jobs
├── SearchBar
├── FilterPanel
├── SortDropdown
├── ActiveFilters
└── JobList
```

Filtering and sorting logic is encapsulated in a reusable custom hook and utility functions for maintainability and future API integration.


## Pagination & Infinite Scrolling

The Jobs module supports scalable data loading.

### Features

- Reusable Pagination Component
- Infinite Scroll using Intersection Observer
- Generic Pagination Hook
- Server-side Pagination Ready
- Empty State Handling
- Loading Indicators

### Architecture

```
Jobs
├── Search
├── Filters
├── Sorting
├── JobList
│   ├── JobCard
│   ├── Pagination
│   └── InfiniteLoader
```

## Saved Jobs

Candidates can bookmark jobs to review or apply later.

### Features

- Save / Unsave Job
- Bookmark Toggle
- Saved Jobs Page
- Local Persistence
- Responsive UI

### Architecture

```
Job Card
   ↓
SaveJobButton
   ↓
SavedJobsContext
   ↓
Local Storage
```

## Job Application Workflow

Candidates can apply for jobs and track their applications throughout the recruitment process.

### Features

- Apply for Jobs
- Resume Submission
- Cover Letter Support
- Application History
- Status Tracking
- Withdraw Application (when eligible)

### Application Statuses

- Applied
- Under Review
- Interview Scheduled
- Shortlisted
- Offer
- Rejected
- Withdrawn


## Recruiter Dashboard

The Recruiter Dashboard provides recruiters with an overview of hiring activities.

### Features

- Recruiter Statistics
- Recent Job Postings
- Recent Applications
- Quick Actions
- Company Summary
- Responsive Layout

### Reusable Components

The dashboard reuses shared components such as:

- DashboardHeader
- DashboardCard
- StatisticsSection
- MainLayout

This approach minimizes duplication and keeps the UI consistent across different user roles.


## Recruiter Job Management

Recruiters can manage job postings through a complete CRUD interface.

### Features

- View Jobs
- Create Job
- Edit Job
- Delete Job
- Search & Filter Jobs
- Status Management
- Pagination-ready architecture

### Architecture

```
ManageJobs
├── JobFilters
├── JobTable
│   ├── JobStatusBadge
│   └── JobActions
├── DeleteJobModal
└── JobForm (Add/Edit)
```

The module uses a reusable service layer and custom hook for data management.

## Applicant Management

Recruiters can efficiently manage job applicants through a dedicated module.

### Features

- View applicants
- Search applicants
- Filter by status
- Sort applicants
- View applicant details
- View and download resumes
- Update application status
- Pagination
- Responsive design

### Architecture

```
Applicants
├── ApplicantSearch
├── ApplicantFilters
├── ApplicantTable
│   ├── ApplicantRow
│   ├── ApplicantStatusBadge
│   └── ApplicantActions
├── ApplicantDetailsModal
└── ResumeViewer
```

## Admin Dashboard

The Admin Dashboard provides a centralized overview of the entire Applicant Tracking System.

### Features

- System Statistics
- User Management Summary
- Recruiter Overview
- Job Analytics
- Application Analytics
- Recent Activities
- System Health Monitoring
- Top Companies
- Quick Actions

### Architecture

```
AdminDashboard
├── AdminHeader
├── AdminStatistics
│   └── AdminCard
├── UserSummary
├── RecruiterSummary
├── JobSummary
├── ApplicationSummary
├── RecentActivities
├── TopCompanies
├── SystemStatus
└── QuickActions
```
## Dashboard Analytics

The Admin Dashboard includes reusable analytics components built with Recharts.

### Features

- Monthly Applications Trend
- Jobs by Category
- User Growth Analytics
- Application Status Distribution
- Responsive Charts
- API-ready Architecture

### Tech Stack

- Recharts
- React Components
- ResponsiveContainer

## Dark Mode

The application supports light and dark themes using React Context and CSS variables.

### Features

- Light & Dark Mode
- Theme persistence with localStorage
- CSS Variable-based styling
- Global ThemeContext
- Responsive theme toggle

### Flow

```
Theme Toggle
      ↓
ThemeContext
      ↓
localStorage
      ↓
CSS Variables
      ↓
Application UI
```
## Loading & Error Handling

The application includes reusable loading and error handling components.

### Features

- Global Loader
- Skeleton Loaders
- Error Boundary
- Reusable Error Component
- Retry Mechanism

### Components

```
Loader
SkeletonCard
SkeletonTable
SkeletonProfile
ErrorFallback
ErrorBoundary
```

Skeleton loaders are displayed while asynchronous data is being fetched, improving perceived performance and user experience.

## Current Progress

- ✅ Project initialized with Vite
- ✅ Installed project dependencies
- ✅ Cleaned Vite starter template
- ✅ Created scalable folder structure
- ✅ Configured React Router
- ✅ Create application layouts
- ✅ Create initial application pages
- ✅ Develop authentication UI
- ✅ Add form validation with React Hook Form and Yup
- ✅ Configure Axios instance
- ✅ Integrate authentication APIs
- ✅ Implement protected and role-based routes
- ✅ Develop candidate dashboard
- ✅ Develop candidate profile management
- ✅ Add resume upload functionality
- ✅ Build job listing module
- ✅ Implement job search filters and sorting
- ✅ Add pagination and infinite scrolling
- ✅ Implement saved jobs feature
- ✅ Develop job application workflow
- ✅ Create recruiter dashboard
- ✅ Implement recruiter job management
- ✅ Add applicant management features
- ✅ Develop admin dashboard
- ✅ Add dashboard analytics
- ✅ Implement dark mode
- ✅ Improve loading states and error handling