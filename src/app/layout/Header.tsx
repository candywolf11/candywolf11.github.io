import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export interface HeaderProps {
  title: string;
  subtitle: string;
  navigation: { path: string; label: string }[];
}

export const Header = ({ title, subtitle, navigation }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navList = navigation.map(({ path, label }) => (
    <li key={path} className="duration-300 hover:scale-110">
      <NavLink
        to={path}
        end
        onClick={() => setIsNavOpen(false)}
        className={({ isActive }) => {
          const defaultClassNames =
            'hover:text-purple-500 dark:hover:text-purple-300';
          return isActive
            ? `${defaultClassNames} text-purple-500 dark:text-purple-300`
            : defaultClassNames;
        }}
      >
        {label}
      </NavLink>
    </li>
  ));

  return (
    <header className="flex items-center">
      {/* <img src="/logo.svg" className="header--logo" alt="Logo" /> */}
      <i className="fa-solid fa-yin-yang fa-3x"></i>
      <div className="ml-5 flex-grow">
        <h1 className="font-serif text-xl font-medium text-purple-500 dark:text-purple-300">
          {title}
        </h1>
        <h2 className="font-medium">{subtitle}</h2>
      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON cursor-pointer space-y-2"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-purple-500 dark:bg-purple-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-500 dark:bg-purple-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-500 dark:bg-purple-300"></span>
          </div>

          <div
            className={
              isNavOpen
                ? 'absolute left-0 top-0 z-10 flex h-full w-full flex-col content-evenly items-center bg-neutral-500/30 backdrop-blur-xl dark:bg-neutral-800/30'
                : 'hidden'
            }
          >
            <div
              className="absolute right-0 top-0 p-8"
              onClick={() => setIsNavOpen(false)}
            >
              <i className="fa-solid fa-close fa-2x cursor-pointer"></i>
            </div>
            <ul className="flex h-full flex-col content-center items-center justify-evenly text-lg font-medium uppercase">
              {navList}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 text-lg font-medium uppercase lg:flex">
          {navList}
        </ul>
      </nav>
    </header>
  );
};
