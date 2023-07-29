# PC BUILDER

## Description
PC Builder is a clean and straightforward website for PC parts and components built using Next.js. It allows users to build their own PC by selecting various PC components from different categories. The website features a PC Builder tool, Featured Products, and Featured Categories, along with Product Detail pages for each component.

## Deployment URL
[PC Builder](https://pc-builder-six.vercel.app)

## Features
- **Navbar**: The website has a navigation bar with a "PC Builder" button that redirects users to the PC Builder page. It also includes a Categories dropdown with routes for different PC component categories.
- **Home Page (SSG)**: The Home page displays 6 random Featured Products, each with image, name, category, price, status, and rating. Clicking on any Featured Product card takes the user to the Product Detail page.
- **Featured Categories (SSG)**: The Home page showcases 6 Featured Categories. Clicking on any category takes the user to a page displaying at least 3 products of that category. Each product card is clickable and leads to the Product Detail page.
- **Product Detail Page (SSG)**: The Product Detail page displays detailed information about each PC component, including image, name, category, price, status, description, key features, individual rating, average rating, and reviews.
- **PC Builder Page (SSR)**: The PC Builder page allows users to choose components from CPU, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor categories. After adding 5-6 components, the user can click the "Complete Build" button.
- **Complete Build Button**: The "Complete Build" button is disabled until the user adds at least 5-6 components to the PC Builder.
- **Protected/Private Route (Bonus)**: The PC Builder page is a protected/private route accessible only to logged-in users. User authentication is implemented using NextAuth with Google/Github login providers.
- **Success Alert (Bonus)**: Clicking on the "Complete Build" button shows a success alert.

## Technologies Used
- Next.js
- Redux (for state management in PC Builder)
- NextAuth (for user authentication)
- HTML,Tailwind CSS (with responsive design for mobile and desktop)

## Setup Instructions
1. Clone the repository from GitHub.
2. Install the required dependencies using `npm install`.
3. Create a `.env.local` file and add the necessary environment variables (e.g., API keys for Google/Github login).
4. Run the development server using `npm run dev`.

## Usage
- Home Page: Displays featured products and categories. Click on any product card or category to explore more.
- Featured Category Pages: Show products from a specific category. Click on any product card for detailed information.
- Product Detail Pages: Provide detailed information about each PC component.
- PC Builder Page: Select components for building a PC. Click on "Choose/Select" buttons to view available components. Click "Add to Builder" to add components to the PC Builder. The "Complete Build" button will be enabled after adding all components.

## Screenshots
[Add relevant screenshots of the website]

## Bonus Features
- The PC Builder page is a protected/private route accessible only to logged-in users.
- Success alert displayed after clicking the "Complete Build" button.

## Author
MD SABBIR REZA SHAFI

