import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/academic', label: 'Academic' },
  { to: '/reading', label: 'Reading' },
  { to: '/todo', label: 'To-Do' },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* 👇 This wrapper ensures nav content aligns with page content */}
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex items-center justify-between py-4 space-x-6 text-sm font-medium text-gray-700">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`hover:text-blue-600 ${
                  pathname === to ? 'text-blue-600 font-semibold underline' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
