'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { NavDropDown } from './NavDropDown';
import NavigationMenu from './NavigationMenu';

function Header() {
  const { isMobile, isDesktop } = useWindowSize();
  return (
    <>
      <header className="bg-background/95 backdrop-blur-3xl sm:h-20 h-16 sticky top-0 z-10 ">
        <div className="flex items-center max-w-7xl mx-auto relative justify-center h-full">
          <p className="text-2xl font-semibold sm:absolute sm:left-0 ">
            Reactory
          </p>
          {isDesktop && <NavigationMenu />}
          <div className="absolute sm:right-0 right-4">
            <NavDropDown />
          </div>
        </div>
      </header>
      {isMobile && <NavigationMenu />}
    </>
  );
}

export default Header;
