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

🧩 Key Components
1. PostAdModal.tsx (Ad Submission System)
A complex, interactive modal that serves as the primary data entry point for users.

Conditional Logic: Dynamically renders form fields based on the selected adType.

If "Land" is selected: Hides Bedroom/Bathroom fields; shows "Perches" and "Land Plan".

If "House/Apartment" is selected: Reveals Room Configuration (Beds, Baths, Living, Dining).

State Management: Manages local form state and handles the POST request to the /api/ads endpoint.

UX Features: Backdrop blur, scroll-lock prevention, and "drag-and-drop" style file upload zones.

2. PropertyCard.tsx (Reusable UI)
A highly modular display component used across all listing pages (/land, /houses, etc.).

Props Interface: Accepts dynamic data including title, price, location, imageUrl, and specs.

Type-Safe Rendering: Displays a category badge (e.g., "LAND", "HOUSE") and context-aware details (e.g., displaying "10 Perches" for land vs. "3 Beds" for houses).

Interactivity: Features image zoom-on-hover and shadow transitions for a modern feel.

3. CustomDropdown.tsx (Filter UI)
A bespoke dropdown component built to replace the native HTML <select> tag.

Purpose: Overcomes browser styling limitations to provide fully rounded corners, custom hover states, and animations.

Features: Click-outside detection to auto-close, icon support, and a scrollable option list.

4. FilterSection.tsx
A client-side component integrated into listing pages.

Combines text search inputs with multiple CustomDropdown instances.

Responsive grid layout that adapts from a single column (Mobile) to a 4-column row (Desktop).

5. Footer.tsx
A responsive, multi-column footer component.

Layout: Uses CSS Grid to stack content vertically on mobile and spread horizontally on larger screens.

Content: Contains navigation links, social media icons, contact details, and copyright information.

📱 User Experience (UX) & Design
Responsive Grid Systems: All listing feeds use a dynamic grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) to ensure properties look great on any device size.

Visual Hierarchy: Utilizes the "Slate" color palette for text hierarchy (Slate-900 for headings, Slate-500 for metadata) and "Blue-600" for primary calls-to-action.

Feedback Loops: Interactive elements (buttons, cards) include transition-all classes for smooth hover states, providing immediate visual feedback to user actions.