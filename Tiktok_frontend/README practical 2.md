### Practical 2
---
### Overview
This project is a TikTok clone built using Next.js, Tailwind CSS, and React. It includes key features like a video feed, user profiles, upload functionality, and authentication forms.

### Features
- Responsive Layout: Sidebar navigation and main content area

- Video Feed: Displays dummy video posts with like/comment/share functionality

- Pages:

    - Home (For You feed)
    - Following
    - Explore
    - Live
    - Profile
    - Upload
    - Login/Signup

- Form Validation: Using react-hook-form for login and registration

### Technologies Used
- Next.js (App Router)

- Tailwind CSS

- React Icons

- React Hook Form

### Installation
1. Clone the repository

2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```

### Project Structure
```
src/
├── app/
│   ├── profile/
│   ├── upload/
│   ├── following/
│   ├── explore/
│   ├── live/
│   ├── login/
│   ├── signup/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── layout/
│   │   └── MainLayout.jsx
│   └── ui/
│       ├── VideoCard.jsx
│       └── VideoFeed.jsx
├── lib/
└── styles/
    └── globals.css
```

### Key Components
- MainLayout.jsx: Main application layout with sidebar and header

- VideoCard.jsx: Individual video post component

- VideoFeed.jsx: Container for video posts

- Authentication forms with validation

### Available Scripts
- npm run dev: Starts the development server

- npm run build: Creates a production build

- npm start: Runs the production build

- npm run lint: Runs ESLint


