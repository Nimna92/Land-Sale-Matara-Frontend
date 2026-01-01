Overview
The frontend of the PropertySale marketplace is built using Next.js 14 (App Router), ensuring a server-first approach for optimal performance and SEO. The UI is constructed with a component-driven architecture using React and TypeScript, styled efficiently with Tailwind CSS.

The application focuses on a seamless user experience, featuring dynamic routing for different property types, sophisticated client-side filtering, and a conditional logic-based submission system.

🛠 Tech Stack
Framework: Next.js 14 (App Router)

Language: TypeScript (Strict Mode)

Styling: Tailwind CSS

Icons: Lucide React

Font: Inter (via next/font)

State Management: React Hooks (useState, useEffect)

📂 Project Structure (App Router)
The project follows the standard Next.js 14 file-system routing conventions:

app/
├── apartment/         # Route: /apartment (Apartment Listings)
│   └── page.tsx
├── houses/            # Route: /houses (House Listings)
│   └── page.tsx
├── land/              # Route: /land (Land Listings)
│   └── page.tsx
├── about/             # Route: /about (Company Info & Stats)
│   └── page.tsx
├── api/               # Serverless API Routes
├── layout.tsx         # Root Layout (Navbar, Footer, Font config)
└── page.tsx           # Homepage (Hero section, Featured categories)

