import cron from 'node-cron';

export const initScheduler = () => {
  // Update trending stocks every 15 minutes
  cron.schedule('*/15 * * * *', () => {
    console.log('Running trending stocks update...');
    // Implementation will go here
  });

  // Daily financial data update at midnight
  cron.schedule('0 0 * * *', () => {
    console.log('Running daily financial data update...');
    // Implementation will go here
  });

  console.log('Scheduler initialized');
};
