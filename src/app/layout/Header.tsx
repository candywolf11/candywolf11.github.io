import { useState } from 'react';
import { NavLink } from "react-router-dom";
export interface HeaderProps {
  title: string;
  subtitle: string;
  navigation: { path: string; label: string }[];
}

export const Header = ({ title, subtitle, navigation }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navList = navigation.map(({ path, label }) =>
  (<li key={path} className="hover:scale-110 duration-300">
    <NavLink
      to={path}
      end
      onClick={() => setIsNavOpen(false)}
      className={({ isActive }) => {
        const defaultClassNames = "hover:text-purple-500 dark:hover:text-purple-300";
        return isActive ? `${defaultClassNames} text-purple-500 dark:text-purple-300` : defaultClassNames;
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
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-purple-500 dark:bg-purple-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-500 dark:bg-purple-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-500 dark:bg-purple-300"></span>
          </div>

          <div
            className={
              isNavOpen
                ? 'absolute top-0 left-0 z-10 flex h-full w-full flex-col content-evenly items-center backdrop-blur-xl bg-neutral-500/30 dark:bg-neutral-800/30'
                : 'hidden'
            }
          >
            <div
              className="absolute top-0 right-0 p-8"
              onClick={() => setIsNavOpen(false)}
            >
              <i className="fa-solid fa-close fa-2x cursor-pointer"></i>
            </div>
            <ul className="text-lg font-medium flex justify-evenly h-full flex-col items-center content-center uppercase">
              {navList}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU text-lg font-medium hidden space-x-8 lg:flex uppercase">
          {navList}
        </ul>
      </nav>
    </header>
  );
};
