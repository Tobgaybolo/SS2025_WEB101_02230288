### Practical 4
---
This practical focuses on connecting the Next.js frontend to an Express.js backend, implementing user authentication, video display, and social interactions. The implementation includes API integration, authentication flows, and enhanced video features.

### Key Features
**Authentication System**
- JWT-based authentication with secure token storage

- Login/registration forms with validation

- Protected routes and authentication context

- Automatic token handling with Axios interceptors

**Video Functionality**
- Real video data fetching from backend

- Like/unlike functionality

- Comment interface

- Video playback controls

- Personalized "Following" feed

**User Interactions**
- User discovery and profile pages

- Follow/unfollow functionality

- Dynamic profile routing

- Video upload interface

### Implementation Steps
1. API Configuration
- Created centralized API client with Axios

- Set up request/response interceptors

- Configured environment variables

2. Authentication System
- Implemented AuthContext for state management

- Created reusable auth modal components

- Added protected route handling

3. Video Services
- Implemented video service for API calls

- Updated VideoCard and VideoFeed components

- Added loading states and error handling

4. User Features
- Created user service for profile/follow APIs

- Built dynamic profile pages

- Implemented explore users page

### Project Structure
```
src/
├── app/
│   ├── explore-users/
│   ├── following/
│   ├── profile/[userId]/
│   ├── upload/
│   └── (various pages)
├── components/
│   ├── auth/
│   ├── ui/
│   └── layout/
├── contexts/
│   └── authContext.jsx
├── lib/
│   └── api-config.js
├── services/
│   ├── videoService.js
│   └── userService.js
└── styles/
```
### Setup Instructions
Install dependencies:
```
npm install axios jwt-decode react-hot-toast
```
Create .env.local file:
```
env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```
Start development server:
```
npm run dev
```
### Testing Guide
1. Authentication:

- Register multiple test accounts

- Verify login/logout flows

- Test protected routes

2. Video Features:

- Upload videos with different accounts

- Test like/comment functionality

- Verify video playback

3. Social Features:

- Follow/unfollow users

- Check personalized feed

- View different user profiles

