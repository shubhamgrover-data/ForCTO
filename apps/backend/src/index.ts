import app from './app';
import dotenv from 'dotenv';
import { initScheduler } from './services/scheduler';

dotenv.config();

const PORT = process.env.PORT || 5000;

initScheduler();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
