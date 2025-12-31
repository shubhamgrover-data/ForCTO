import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            MarketSense
          </Link>
          <nav className="flex gap-4">
            <Link to="/" className="hover:text-blue-500">Dashboard</Link>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/register" className="hover:text-blue-500">Register</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MarketSense. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
