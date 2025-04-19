# Bento Cakes Workshop Website

A modern, responsive website for a Bento Cake Workshop in London built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- 🎯 Interactive components using Headless UI
- 🌟 Beautiful transitions with Framer Motion
- 📝 Form handling with React Hook Form
- 🎨 Customizable color scheme
- 🔍 SEO friendly structure

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion
- Headless UI
- React Hook Form
- Heroicons
- Vite

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bento-cakes-workshop.git
   cd bento-cakes-workshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Mentors.jsx
│   ├── Benefits.jsx
│   ├── Agenda.jsx
│   ├── Pricing.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── JoinForm.jsx
│   ├── FAQ.jsx
│   └── Footer.jsx
├── assets/            # Images and other static files
├── App.jsx           # Main application component
├── index.css        # Global styles and Tailwind directives
└── main.jsx         # Application entry point
```

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file. The current theme uses a pink-based palette that can be modified to match your brand colors.

### Content

Update the content in each component file to match your workshop's specific details:

- Update workshop details in `Hero.jsx`
- Modify mentor profiles in `Mentors.jsx`
- Adjust pricing in `Pricing.jsx`
- Update FAQ items in `FAQ.jsx`
- Modify contact information in `Footer.jsx`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email hello@bentocakes.london or create an issue in this repository.
