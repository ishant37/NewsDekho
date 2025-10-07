# 📰 NewsDekho - Modern News App

A beautiful, animated news application built with React, Vite, and News API. Browse the latest news across different categories with a modern, responsive UI.

## ✨ Features

- 🎨 **Modern Animated UI** - Smooth transitions and hover effects
- 📱 **Fully Responsive** - Works on all devices
- 🗂️ **Multiple Categories** - General, Entertainment, Sports, Technology
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎯 **Clean Design** - Gradient backgrounds and card-based layout

## 🚀 Live Demo

**Production URL:** [https://news-dekho-blush.vercel.app/](https://news-dekho-blush.vercel.app/)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- News API key from [newsapi.org](https://newsapi.org/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ishant37/NewsDekho.git
   cd NewsDekho
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your News API key:
   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite 6** - Build tool and dev server
- **React Router v7** - Client-side routing
- **News API** - News data source
- **Bootstrap 5** - Styling framework
- **React Spinners** - Loading animations

## 🌐 Deployment on Vercel

This app is configured for seamless Vercel deployment. Follow these steps:

### Quick Deployment Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Configure Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Add environment variable:
     - Name: `VITE_NEWS_API_KEY`
     - Value: Your News API key
   - Deploy!

3. **Auto-deploy enabled** - Every push to main triggers a new deployment

### Detailed Instructions:
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment guide
- See [VERCEL_CHECKLIST.md](./VERCEL_CHECKLIST.md) for step-by-step checklist
- See [QUICK_FIX.md](./QUICK_FIX.md) for troubleshooting

## 📁 Project Structure

```
NewsDekho/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Entertainment.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Navbar.jsx
│   │   ├── News.jsx
│   │   ├── NewsItem.jsx
│   │   ├── Sports.jsx
│   │   ├── Technology.jsx
│   │   └── api/
│   │       └── news.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.local (create this)
├── .env.example
├── vercel.json
├── vite.config.js
└── package.json
```

## 🎯 Available Routes

- `/` - Home (General News)
- `/entertainment` - Entertainment News
- `/sports` - Sports News
- `/technology` - Technology News

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration for SPA routing
- `vite.config.js` - Vite build configuration
- `.env.local` - Environment variables (not committed)
- `.env.example` - Template for environment variables

## 🐛 Troubleshooting

### Blank page on Vercel?
- Ensure environment variable `VITE_NEWS_API_KEY` is set on Vercel
- Check `vercel.json` exists in project root
- Redeploy after setting environment variables

### News not loading?
- Verify your News API key is valid
- Check if you've exceeded free tier limits (100 requests/day)
- Open browser console (F12) for error messages

### Build fails?
- Run `npm run build` locally to test
- Check all dependencies are in `package.json`
- Verify Node.js version compatibility

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ishant**
- GitHub: [@ishant37](https://github.com/ishant37)

## 🙏 Acknowledgments

- [News API](https://newsapi.org/) for providing news data
- [Vercel](https://vercel.com/) for hosting
- [Vite](https://vitejs.dev/) for the amazing build tool

---

**Made with ❤️ by Ishant**

