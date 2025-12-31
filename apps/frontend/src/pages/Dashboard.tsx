const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Market Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Trending Stocks</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Watchlist</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Market News</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
