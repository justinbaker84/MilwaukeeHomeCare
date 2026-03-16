# Milwaukee Senior Care - Content Website

A modern Next.js content website for Milwaukee Senior Care with text and image support.

## Project Structure

```
app/
├── layout.tsx          # Main layout with header, navigation, and footer
├── page.tsx            # Home page with hero section and services overview
├── globals.css         # Global Tailwind CSS styles
├── favicon.ico         # Website favicon
├── about/
│   └── page.tsx        # About us page
└── services/
    └── page.tsx        # Services page

public/                 # Static assets (images, icons, etc.)
```

## Getting Started

### Development Server

Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Adding New Pages

To add a new page, create a new directory with a `page.tsx` file:

```
app/
└── new-page/
    └── page.tsx
```

The page will automatically be available at `/new-page`.

## Adding Images

1. **Add images to the public folder**: Place your images in the `public/` directory
2. **Use Next.js Image component**: Import and use the Image component for optimized images

Example:

```tsx
import Image from "next/image";

export default function MyComponent() {
  return (
    <Image
      src="/my-image.jpg"
      alt="Description"
      width={800}
      height={600}
    />
  );
}
```

## Styling

This project uses **Tailwind CSS** for styling. You can customize colors, fonts, and other design elements in `tailwind.config.ts`.

### Common Tailwind Classes

- **Spacing**: `px-4`, `py-8`, `mb-6`, `gap-4`
- **Typography**: `text-lg`, `font-bold`, `text-gray-900`
- **Colors**: `bg-indigo-600`, `text-blue-500`, `border-gray-200`
- **Responsive**: `sm:px-6`, `md:grid-cols-2`, `lg:px-8`

## Navigation

The main navigation is defined in `app/layout.tsx`. Update the navigation links in the header section to add or remove pages.

## Current Pages

- **Home** (`/`): Landing page with hero section and services overview
- **About** (`/about`): Company information and values
- **Services** (`/services`): Detailed service descriptions

## Customization Tips

1. **Change colors**: Update the color classes (e.g., `indigo-600`) to match your brand
2. **Update text content**: Edit the text directly in each page file
3. **Add images**: Upload images to the `public/` folder and reference them in Image components
4. **Modify layout**: Update `app/layout.tsx` to change the header, navigation, or footer

## Technologies Used

- **Next.js 16.1.6**: React framework for production
- **React 19.2.3**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code quality tool

## Deployment

This project is ready to deploy to any platform that supports Next.js:

- **Vercel**: Recommended (created by Next.js team)
- **Netlify**: Popular static hosting option
- **AWS**: Using Amplify or similar services
- **Docker**: Containerized deployment

For Vercel deployment:

```bash
npm install -g vercel
vercel
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Ready to customize your site? Start by editing the content in `app/page.tsx` and creating new pages as needed!
