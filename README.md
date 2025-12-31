# MarketSense - Comprehensive Stock Analysis Platform

MarketSense is a full-stack platform for deep stock analysis, combining financial data, news sentiment, and social trends.

## Architecture

The project is structured as a monorepo:

- `apps/frontend`: React + TypeScript + Vite + Tailwind CSS
- `apps/backend`: Node.js + Express + TypeScript + Prisma
- `packages/shared`: (Planned) Shared types and utilities

### Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Shadcn/ui, TanStack Query, Zustand, Recharts.
- **Backend:** Node.js, Express, TypeScript, Prisma.
- **Database:** PostgreSQL (Relational), Redis (Caching).
- **Authentication:** JWT with bcrypt hashing.

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- Redis

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create `apps/backend/.env` (copy from `.env.example` if available)
   - Create `apps/frontend/.env`

4. Run database migrations:
   ```bash
   cd apps/backend
   npx prisma migrate dev
   ```

5. Start the development servers:
   ```bash
   # From the root
   npm run dev:backend
   npm run dev:frontend
   ```

## API Documentation

The API is versioned at `/api/v1`.

### Endpoints implemented (Phase 1):

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login and receive JWT
- `GET /stocks/search`: Search for stocks (skeleton)
- `GET /stocks/:id`: Get stock details (skeleton)
- `GET /companies/:id`: Get company metadata (skeleton)
- `POST /watchlist`: Create a watchlist (skeleton, requires auth)
- `GET /user/watchlist`: Get user watchlists (skeleton, requires auth)

## Database Schema

The database schema is defined in `apps/backend/prisma/schema.prisma`. It includes:

- `User`: User accounts and authentication
- `Company`: General company information
- `Stock`: Market data for companies
- `FinancialData`: Historical financials (P&L, Balance Sheet, Cash Flow)
- `Shareholding`: Company ownership structure
- `AnnualReport`: Links to and summaries of annual reports
- `News`: Aggregated news articles with sentiment analysis
- `Watchlist`: User-curated lists of stocks
- `PriceAlert`: User-defined price notifications
