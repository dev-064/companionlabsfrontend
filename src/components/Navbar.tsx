'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center pt-8 pb-4 bg-transparent">
      <div className="flex items-center rounded-full border border-gray-200 shadow-md bg-white px-2 py-1 w-fi">
        {navItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex items-center px-7 py-2 rounded-full font-semibold transition-all duration-200
                ${isActive ?
                  'bg-gray-100 text-black shadow-[0_-8px_24px_0_rgba(0,0,0,0.12)]' :
                  'text-gray-700 hover:bg-gray-50'}
              `}
            >
              {isActive && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-b-full blur-sm opacity-30" />
              )}
              <span className={isActive ? 'font-bold' : ''}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar; 