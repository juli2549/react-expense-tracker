# Expense Tracker App

A simple expense tracking application built with React, TypeScript, and Vite.

## Features

- User authentication (demo credentials: admin/admin)
- Add and track expenses
- Categorize expenses
- View expense history in a table format
- Responsive design

## Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or pnpm package manager

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd expense-tracker
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### 3. Run the Development Server

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using pnpm:
```bash
pnpm dev
```

The application will start on `http://localhost:8080` by default.

## Usage

1. Navigate to the login page
2. Use the demo credentials:
   - Username: `admin`
   - Password: `admin`
3. Add expenses using the form on the dashboard
4. View your expense history in the table
5. Logout when finished

## Building for Production

To create a production build:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

Using pnpm:
```bash
pnpm build
```

## Previewing the Production Build

After building, you can preview the production build:

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

Using pnpm:
```bash
pnpm preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
├── utils/          # Helper functions
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── globals.css     # Global CSS styles
```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)

## License

This project is licensed under the MIT License.