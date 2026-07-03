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



## Current Progress

- ✅ Project initialized with Vite
- ✅ Installed project dependencies
- ✅ Cleaned Vite starter template
- ✅ Created scalable folder structure
- ✅ Configured React Router

