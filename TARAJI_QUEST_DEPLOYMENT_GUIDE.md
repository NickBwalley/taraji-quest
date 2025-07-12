# Taraji Quest Website Deployment Guide

## 📁 Files Included

1. **taraji-quest-website.zip** - Ready-to-deploy website files for cPanel
2. **frontend/** - Source React code for development
3. **This deployment guide**

## 🚀 Deployment Options

### Option 1: cPanel Hosting (Shared Hosting)

#### Prerequisites
- Access to cPanel hosting account
- File Manager access in cPanel

#### Steps
1. **Login to cPanel**
   - Access your hosting provider's cPanel
   - Navigate to "File Manager"

2. **Upload Files**
   - Go to `public_html` directory (or your domain's root folder)
   - Upload `taraji-quest-website.zip`
   - Extract the zip file in the directory
   - Delete the zip file after extraction

3. **Set Permissions** (if needed)
   - Ensure files have proper permissions (644 for files, 755 for directories)

4. **Access Your Website**
   - Visit your domain URL
   - The website should load immediately

#### Troubleshooting cPanel
- If images don't load, check the file permissions
- If the site shows a 404, ensure files are in the correct directory
- Contact your hosting provider if you encounter issues

---

### Option 2: Vercel Deployment (Recommended)

#### Prerequisites
- GitHub account
- Vercel account (free)

#### Method A: Direct Deploy
1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Upload Source Code**
   - Upload the `frontend/` folder to a GitHub repository
   - Or use Vercel's drag-and-drop feature

3. **Deploy**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a React app
   - Click "Deploy"
   - Your site will be live in minutes

#### Method B: Command Line
```bash
# Install Vercel CLI
npm i -g vercel

# In your frontend directory
cd frontend
vercel

# Follow the prompts
# Your site will be deployed instantly
```

#### Custom Domain on Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS records as instructed

---

### Option 3: Netlify Deployment

#### Prerequisites
- Netlify account (free)

#### Method A: Drag and Drop
1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free

2. **Deploy Built Files**
   - Unzip `taraji-quest-website.zip`
   - Drag the folder contents to Netlify's deploy area
   - Your site goes live instantly

#### Method B: Git Integration
1. **Upload to GitHub**
   - Upload your `frontend/` folder to GitHub

2. **Connect to Netlify**
   - Link your GitHub repository to Netlify
   - Set build command: `yarn build`
   - Set publish directory: `build`
   - Deploy

#### Custom Domain on Netlify
1. Go to "Site settings" → "Domain management"
2. Add your custom domain
3. Update DNS records as instructed

---

## 🛠 Development Setup (For Future Changes)

### Prerequisites
- Node.js 18+ installed
- Yarn package manager

### Setup Steps
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

### Making Changes
1. Edit files in `frontend/src/`
2. Test changes with `yarn start`
3. Build with `yarn build`
4. Deploy the new `build/` folder

---

## 🎨 Customization Guide

### Colors
The website uses a green and blue sustainability theme. To change colors:

1. Open `frontend/src/App.js`
2. Look for gradient classes like `from-blue-500 to-green-500`
3. Update with your preferred colors
4. Rebuild and redeploy

### Content
To update content:

1. **Text Content**: Edit the text directly in `App.js` components
2. **Images**: Replace image URLs with your own
3. **Links**: Update the Oxyworld-PSA link and other external links
4. **Team Members**: Update the team section with your actual team data

### Adding New Sections
1. Create a new component in `App.js`
2. Add it to the main App component
3. Update navigation if needed

---

## 📱 Features Included

### ✅ Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation

### ✅ Modern UI/UX
- Smooth scrolling
- Hover effects
- Professional animations
- Fast loading times

### ✅ SEO Ready
- Semantic HTML structure
- Optimized images
- Clean URLs

### ✅ Accessibility
- Keyboard navigation
- Screen reader friendly
- Proper contrast ratios

---

## 🔧 Technical Specifications

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App with Craco
- **Browser Support**: All modern browsers
- **Mobile Support**: iOS Safari, Chrome Mobile
- **Performance**: Optimized for fast loading

---

## 📞 Support

For technical support or customization requests:

1. **Documentation Issues**: Refer to React and Tailwind CSS documentation
2. **Deployment Issues**: Contact your hosting provider
3. **Customization**: Hire a React developer for major changes

---

## 🚨 Important Notes

### Security
- This is a static website (HTML, CSS, JS only)
- No server-side code included
- Safe to deploy on any web hosting

### Performance
- Images are optimized for web
- CSS and JS are minified
- Follows web best practices

### Updates
- To update content, edit source files and rebuild
- Keep source code backed up for future changes
- Test changes locally before deploying

---

## 📋 Deployment Checklist

- [ ] Choose hosting method (cPanel, Vercel, or Netlify)
- [ ] Upload/deploy files
- [ ] Test website functionality
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact forms (if added)
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate
- [ ] Submit to search engines

---

**🎉 Congratulations! Your Taraji Quest website is now live and ready to make an impact!**

The website perfectly captures the sustainability theme with its green and blue color scheme, professional design, and responsive layout. It includes all the key sections from the original site while being fully modern and mobile-friendly.