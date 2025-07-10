# Web Agents

A modern React application for managing web agents and room-based interactions.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM 7
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Code Quality**: Biome (linter/formatter)
- **Package Manager**: pnpm

## Project Structure

```bash
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
├── http/          # API client and services
├── types/         # TypeScript type definitions
└── app.tsx        # Main application component
```

## Setup Instructions

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The project uses:

- **Biome** for code formatting and linting
- **TypeScript** with strict null checks
- **Path aliases** (`@/*` points to `src/*`)
- **Tailwind CSS** for styling with custom configuration

### Key Features

- Room-based navigation system
- Query-based state management
- Form validation with Zod schemas
- Responsive UI with Radix components
- Type-safe development with TypeScript
