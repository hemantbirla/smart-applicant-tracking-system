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

### MainLayout

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