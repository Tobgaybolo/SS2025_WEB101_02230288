### Practical 3
---
### Objective
Create a React application with a file upload form that includes:

- Multipart form data handling

- File type and size validation

- Upload progress tracking

- Drag-and-drop interface

### Project Setup
1. Create a Next.js Project

- Run the following commands to set up a new Next.js project:
```
npx create-next-app file-upload
cd file-upload
```
2. Install Required Dependencies
- Install the necessary packages:
```
npm install react-hook-form formidable axios react-dropzone
```
### Project Structure
```
file-upload/
├── pages/
│   ├── index.js          # Main file upload form
│   └── api/
│       └── upload.js     # API route for handling file uploads
├── public/               # Static files (if needed)
└── package.json
```
### Key Features
1. File Upload Form (pages/index.js)
- Built using React Hook Form for form state management.

- Supports drag-and-drop using react-dropzone.

- Validates:

    - File type (e.g., only images or PDFs).

    - File size (e.g., max 5MB).

- Displays upload progress using Axios.

2. API Route for File Upload (pages/api/upload.js)
- Uses formidable to parse multipart form data.

- Handles file storage (e.g., saving to /uploads).

- Returns success/error responses.

### How to Run
1. Start the Development Server
```
npm run dev
```

2. Test File Upload
- Drag & drop a file or click to browse.

- The form will validate file type and size.

- Progress bar shows upload status.

- Success/error messages appear after upload.

