# 🚀 Jatin Vyas – Professional Developer Portfolio

Welcome to the source repository of my developer portfolio! This is a modern, fast, and fully responsive single-page web application showcasing my skills, projects, and professional platforms. Built using **React 19, Vite, Tailwind CSS v4, Framer Motion, and GSAP**.

---

## ✨ Features

*   **⚡ Lightning-Fast Performance**: Built on Vite with optimal asset packaging.
*   **🎭 Smooth Animations**: Dynamic text typing effects, holographic 3D tilt cards, custom cursor trails, and scroll-triggered animations powered by GSAP and Framer Motion.
*   **🌌 Canvas Particles**: Interactive glowing particle effects in the background.
*   **📱 Responsive Layout**: Seamless UX across mobile, tablet, and desktop devices.
*   **📬 Contact Integration**: Fully operational contact form built with client-side validation and integration with **EmailJS**.

---

## 🛠️ Technology Stack

*   **Frontend**: React 19, HTML5, Vanilla CSS
*   **Styling**: Tailwind CSS v4 (configured via Vite plugin)
*   **Animations**: Framer Motion & GSAP (GreenSock)
*   **Icons**: React Icons
*   **Form Deliveries**: EmailJS SDK

---

## 🚀 Getting Started (Local Development)

Follow these steps to run the portfolio website on your local machine:

### 1. Prerequisites
Ensure you have **Node.js (v18 or later)** installed.

### 2. Installation
Clone this repository or navigate to your extracted folder, then open your terminal and run:
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory by copying the template:
```bash
cp .env.template .env
```
Open `.env` and enter your EmailJS credentials:
```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app!

### 5. Build for Production
To bundle and optimize the project for hosting:
```bash
npm run build
```
This generates the static assets in the `dist/` directory.

---

## 📂 Project Structure

```
portfolio/
├── public/             # Static public assets (Resume.pdf, favicon)
├── src/
│   ├── assets/         # Project images, avatars, logo assets
│   ├── components/     # Reusable layout and helper elements
│   │   ├── CustomCursor.jsx
│   │   ├── IntroAnimation.jsx
│   │   ├── Navbar.jsx
│   │   ├── OverlayMenu.jsx
│   │   └── ParticlesBackground.jsx
│   ├── sections/       # Modular page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Profiles.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.css         # Component utility styles
│   ├── App.jsx         # Main layout orchestrator
│   ├── index.css       # Core Tailwind CSS imports & animations
│   └── main.jsx        # App entry mounting script
```

---

## 🌐 Deployment

You can host this website for free in minutes:

### Vercel / Netlify
1. Connect your GitHub repository to **Vercel** or **Netlify**.
2. Set the Build Command to `npm run build` and the Publish Directory to `dist`.
3. **Important**: Add your `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, and `VITE_PUBLIC_KEY` in the hosting environment variables dashboard.
4. Deploy!

---

## 👤 Author

*   **Name**: Jatin Vyas
*   **Role**: MERN Full Stack Developer
*   **GitHub**: [@jatinvyas-24](https://github.com/jatinvyas-24)
*   **LinkedIn**: [Jatin Vyas](https://www.linkedin.com/in/jatin-vyas-1a4043327/)
 