<h3 align="center">QuickBlog — Full-Stack Blogging Platform</h3>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">✨ Introduction</a>

Name: Sumit Patra

Intern ID: CITS5134

Domain: Full-Stack Web Development

QuickBlog is a modern, full-featured blogging platform built with React, Express.js, and MongoDB, designed for seamless content creation and management. The platform features a robust admin dashboard with JWT authentication, rich text editing via Quill, AI-powered content generation using Google Gemini, and optimized image handling through ImageKit. From dynamic blog listing with real-time updates to comprehensive comment management and category-based organization, the platform provides a modular, developer-friendly stack optimized for performance, security, and user experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[React](https://react.dev)** is a powerful JavaScript library for building user interfaces with component-based architecture, enabling efficient DOM updates and state management through its virtual DOM implementation.

- **[Vite](https://vitejs.dev)** is a next-generation frontend tooling that provides instant server start, lightning-fast hot module replacement (HMR), and optimized production builds using native ES modules.

- **[Express.js](https://expressjs.com)** is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications, including routing, middleware support, and easy API development.

- **[MongoDB](https://www.mongodb.com)** is a document-oriented NoSQL database that offers high performance, high availability, and automatic scaling, perfect for storing and managing blog content with flexible schemas.

- **[Mongoose](https://mongoosejs.com)** is an elegant MongoDB object modeling tool designed to work in an asynchronous environment, providing schema validation, middleware support, and intuitive APIs for database operations.

- **[Tailwind CSS](https://tailwindcss.com)** is a utility-first CSS framework that allows developers to rapidly build modern websites by composing styles directly in HTML markup, ensuring highly customized designs and optimized production bundles.

- **[Quill](https://quilljs.com)** is a modern rich text editor built for compatibility and extensibility, providing a WYSIWYG editing experience with cross-browser support and modular architecture.

- **[ImageKit](https://imagekit.io)** is a complete image optimization and transformation solution that automatically optimizes images in real-time, delivers them through a global CDN, and provides powerful transformation capabilities.

- **[Google Gemini](https://ai.google.dev/gemini-api)** is Google's advanced AI model that provides powerful content generation capabilities, enabling automated blog content creation with natural language processing.

- **[JWT](https://jwt.io)** is a compact, URL-safe means of representing claims to be transferred between two parties, providing secure authentication and authorization for admin access.

## <a name="features">🔋 Features</a>

👉 **Admin Authentication**: Secure login system with JWT-based authentication, ensuring only authorized users can access the admin dashboard for content management and publishing.

👉 **Blog Creation & Management**: Comprehensive CRUD operations for blog posts with rich text editing using Quill editor, supporting markdown-style formatting and seamless content composition.

👉 **AI-Powered Content Generation**: Integrated Google Gemini API for automated blog content generation, allowing admins to generate high-quality blog posts from simple prompts with AI assistance.

👉 **Image Optimization**: Automatic image upload and optimization through ImageKit, with intelligent transformations including quality optimization, format conversion to WebP, and responsive sizing for optimal performance.

👉 **Category System**: Organize blogs into different categories for better content discovery and user navigation, enabling structured content management and improved user experience.

👉 **Publishing Control**: Toggle blog visibility with publish/unpublish functionality, allowing admins to draft content and control when blogs go live on the platform.

👉 **Comment System**: User engagement through blog comments with admin moderation, supporting comment approval workflow to maintain content quality and community standards.

👉 **Responsive Design**: Mobile-first design with Tailwind CSS ensuring optimal viewing experience across all devices, from desktop to mobile phones.

👉 **Real-time Updates**: Dynamic blog listing with automatic refresh capabilities, ensuring users always see the latest published content without manual page reloads.

👉 **SEO-Friendly**: Clean URL structure and semantic HTML markup for better search engine optimization, helping blogs rank higher in search results.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local MongoDB installation or MongoDB Atlas account)

**Cloning the Repository**

```bash
git clone https://github.com/Sum01-ghb/Blog-App.git
cd Blog-App
```

**Installation**

Install the project dependencies for both client and server:

```bash
# Install server dependencies
cd Server
npm install

# Install client dependencies
cd Client
npm install
```

**Set Up Environment Variables**

Create a `.env` file in the `Server` directory and add the following content:

```env
MONGODB_URI=mongodb://localhost:27017/quickblog
PORT=3000
JWT_SECRET=your_jwt_secret_key_here
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GOOGLE_AI_API_KEY=your_google_gemini_api_key
```

Create a `.env` file in the `Client` directory and add the following content:

```env
VITE_BACKEND_URL=http://localhost:3000
```

**Running the Project**

Start both the server and client in separate terminals:

```bash
# Terminal 1 - Start the server
cd Server
npm run server

# Terminal 2 - Start the client
cd Client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

**API Endpoints**

- `GET /api/blog/all` - Get all published blogs
- `GET /api/blog/:blogId` - Get a specific blog by ID
- `POST /api/admin/login` - Admin login
- `POST /api/blog/add` - Add a new blog (requires auth)
- `POST /api/blog/delete` - Delete a blog (requires auth)
- `POST /api/blog/toggle-publish` - Toggle blog publish status (requires auth)
- `POST /api/blog/add-comment` - Add a comment to a blog
- `POST /api/blog/generate` - Generate AI content (requires auth)

**Getting API Keys**

- **MongoDB**: Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database or install locally
- **ImageKit**: Get credentials from [ImageKit Dashboard](https://imagekit.io/dashboard)
- **Google AI**: Get API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
