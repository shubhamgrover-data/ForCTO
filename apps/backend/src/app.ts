import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import routes from './routes';
import { errorHandler } from './middleware/error';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use('/api', limiter);

// Routes
app.use('/api/v1', routes);

// Error handling
app.use(errorHandler);

export default app;
