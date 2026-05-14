## 📸 Portfolio Preview

## 🌐 Live Demo : https://portfolio-five-phi-83.vercel.app/

A modern, responsive portfolio website built with React and Vite. Showcasing projects, skills, experience, and education with smooth animations and interactive components.

## 🌟 Features 
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - Powered by Framer Motion for engaging UI transitions
- **Fast Performance** - Built with Vite for optimal build times and HMR
- **Contact Form** - Integrated EmailJS for direct messaging
- **Modern UI** - Glass-morphism design with Tailwind CSS
- **Smooth Scrolling** - React Scroll for seamless navigation
- **Icon Library** - Lucide React and React Icons for beautiful icons
- **Production Ready** - ESLint configured for code quality

## 🛠️ Tech Stack

- **Frontend Framework** 
- **Build Tool** 
- **Styling** 
- **Animations** 
- **Email Service** 
- **Icons** 
- **Smooth Scrolling** 
- **Code Quality** 

## 📋 Project Structure

```
src/
├── components/
│   ├── About.jsx           # About section
│   ├── Contact.jsx         # Contact form with EmailJS
│   ├── Education.jsx       # Education details
│   ├── Experience.jsx      # Work experience
│   ├── GlassCard.jsx       # Reusable glass-morphism card
│   ├── Hero.jsx            # Landing section
│   ├── Navbar.jsx          # Navigation bar
│   ├── NeonButton.jsx      # Reusable neon button
│   ├── Projects.jsx        # Project showcase
│   └── Skills.jsx          # Skills section
├── assets/                 # Images and static assets
├── App.jsx                 # Main App component
├── App.css                 # Global styles
├── main.jsx                # Entry point
└── index.css               # Base styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (for contact form)
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Update your EmailJS credentials in the Contact component

### Development

Start the development server:
```bash
npm run dev
```
The application will open at `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Configuration

### Tailwind CSS
- Configured in `tailwindcss.config.js`
- Custom brand colors defined (brand-black, brand-gray, brand-purple, brand-white)

### Vite
- Configuration in `vite.config.js`
- React plugin with Babel transpilation enabled

### ESLint
- Configuration in `eslint.config.js`
- Rules enabled for React hooks and refresh

## 🎨 Customization

### Colors
Update brand colors in your Tailwind config:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        black: '#000000',
        gray: '#E8E8E8',
        purple: '#9D4EDD',
        white: '#FFFFFF',
      }
    }
  }
}
```

### Sections
Modify sections in the `src/components/` directory:
- Update content
- Customize styling with Tailwind classes
- Add new components as needed

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
1. Add to `vite.config.js`:
   ```javascript
   export default {
     base: '/portfolio/',
   }
   ```
2. Build and push to gh-pages branch

## 📝 Environment Variables

Create a `.env` file in the root directory for sensitive data:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🐛 Troubleshooting

### Build Errors
Check `build_error.txt` for detailed error logs

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### EmailJS Not Working
- Verify EmailJS credentials
- Check browser console for errors
- Ensure CORS is enabled in EmailJS dashboard

## 📷 ScreenShot
<img width="955" height="427" alt="image" src="https://github.com/user-attachments/assets/2e3c8d8c-406f-4615-af0a-02b66d3e03c7" />


## 📧 Contact

For inquiries and collaboration opportunities, please use the contact form on the website or reach out directly.

---

**Made with ❤️ using React + Vite**
