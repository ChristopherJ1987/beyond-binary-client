# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

---

## The Core Application Logic (/app)
This is where 99% of your work happens.

- **`root.tsx:`** This is the parent of all parents. It's the very first component React renders. It contains your ```<html>```, ```<head>```, and ```<body>``` tags. If you want a Navigation bar on every single page, you put it here.
- **`routes.ts:`** This is a configuration file that tells the app which URL matches which file. In newer versions, it replaces the old way of just putting files in a folder to create routes.
- **`app.css:`** This is your *`Global Stylesheet`*. Import your Tailwind layers here. Because it's imported in **`root.tsx`**, these styles apply to the entire site.
- **`/routes/home.tsx:`** This is currently your homepage. You can rename this or create new ones, but this is where the bulk of your landing page lives.

## The Configuration & Tools
These files handle how your code is built and deployed.

- **`.react-router/:`** **Do not touch this**. This is a 'generated' directory. React Router uses it to keep track of types and builds artifacts. It's like a scratchpad for the framework.
- **`react-router.config.ts:`** This is where you tell the framework how to behave - for example, if you want it to be a static site (SSG) or a Server-Side Rendered (SSR) app.
- **`vite.config.ts:`** React-Router v& uses Vite as its engine to bundle your code. Even though this particular application is using 'React Router" code, Vite is the 'mechanic' under the hood making sure it runs in the browser.
- **`tsconfig.json:`** This is the typescript configuration. It tells the code editor how to check your code for errors. This rarely needs to be changed.

## Deployment & Dev-Ops (.dockerignore & Dockerfile)

- **`Dockerfile:`** This is a recipe for a 'Container'. It tells a server exactly how to set up an environment (Linxu, Node.js, etc.) to run the application.
- **`.dockerignore:`** This is exactly like **.gitignore**. It tells Docker: 'Dont' include these files (like node_modules) when you are building my application container.' It keeps the final package small and secure.

## Project Structure
Here is how the data and styles flow through these files:

- **`root.tsx:`** (The Frame) - Thinks of this as the chassis of a car. It stays the same while you swap out the engine and the interior. It handles your <Meta/> tags (SEO), <Links/> (CSS files), and the <ScrollRestoration/>.
- **`app.css:`** (The Paint) - This is where your Tailwind directives live. Since it's imported in **root.tsx**, any 'Utility Class' you write in a component is instantly powered by this file.
- **`routes/home.tsx:`** (The Interior) - This is the specific 'view' for the **/** URL. It is rendered inside the <Outlet/> component found in your **root.tsx**.