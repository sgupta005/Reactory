'use client';

import { Home, Search, Bell, User, SquarePen } from 'lucide-react';
import NavButton from './NavButton';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: SquarePen, label: 'Create', href: '/create' },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
  { icon: User, label: 'Profile', href: '/profile' },
];

function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center sm:gap-4 fixed sm:static bottom-0 bg-background w-full sm:w-max justify-around">
      {navigationItems.map((item) => (
        <NavButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}

export default NavigationMenu;
