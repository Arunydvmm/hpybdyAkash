# 🚀 Quick Setup Guide

## Prerequisites

- Node.js 16+ (download from [nodejs.org](https://nodejs.org))
- npm or yarn package manager

## Step-by-Step Installation

### 1. Navigate to the project folder

```bash
cd AkashBirthdayExperience
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- React
- Framer Motion
- GSAP
- Tailwind CSS
- Vite

**Installation typically takes 2-5 minutes.**

### 3. Start the development server

```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

### 4. Interact with the experience

- Click through scenes
- Upload photos in Scene 3
- Light candles in Scene 9
- Click hidden elements
- Enjoy the celebration!

## 📱 Mobile Viewing

You can access from any device on your network:

1. Find your computer's IP address:
   - **Windows**: Open Command Prompt and type `ipconfig`
   - **Mac/Linux**: Open Terminal and type `ifconfig`

2. Visit: `http://YOUR-IP:3000` from another device

3. Enjoy on mobile/tablet!

## 🛠️ Common Issues

### Port 3000 already in use?

Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001, // or another port
}
```

### Photos not uploading?

- Check browser console for errors (F12)
- Ensure photos are valid image formats (JPG, PNG, GIF)
- Maximum file size: Your browser's memory limit

### Animations stuttering?

- Try closing other applications
- Check browser performance (devtools)
- Mobile: Reduce number of particles

## 🎬 Production Build

To create an optimized version:

```bash
npm run build
```

This generates a `dist/` folder that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any web server

## 📤 Deploy to Vercel (Free)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Get a shareable link!

## 🎨 Customization Tips

### Change Colors
Edit `src/index.css` or `tailwind.config.js`

### Modify Messages
Each scene file contains the content - feel free to edit!

### Add Custom Audio
Replace audio files in scene components

### Change Duration
Adjust `transition={{ duration: X }}` values in scenes

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank screen | Clear browser cache (Ctrl+F5) |
| Console errors | Check network tab, try refreshing |
| Photos not showing | Ensure valid file format |
| Slow animations | Close other applications |
| Mobile not responsive | Test in different browser |

## 📚 Learn More

- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Docs](https://gsap.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

## 🎉 You're All Set!

The experience is ready to amaze Akash. Have fun! 🎂✨

---

**Questions?** Check the main README.md or dive into the scene files to customize!
