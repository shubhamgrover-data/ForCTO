import { useParams } from 'react-router-dom';

const StockDetail = () => {
  const { symbol } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Stock: {symbol}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Price Chart</h2>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded">
            Chart Placeholder
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Market Cap</span>
              <span className="font-semibold">-</span>
            </div>
            <div className="flex justify-between">
              <span>PE Ratio</span>
              <span className="font-semibold">-</span>
            </div>
            <div className="flex justify-between">
              <span>Dividend Yield</span>
              <span className="font-semibold">-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
