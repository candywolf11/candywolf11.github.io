import { Outlet } from 'react-router-dom';
import { pageData } from './data';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

export const App = () => {
  const { headerProps, footerProps } = pageData;

  return (
    <div className="m-auto flex max-w-7xl flex-col gap-10 bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 p-8 text-neutral-700 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 dark:text-neutral-300">
      <Header {...headerProps} />
      <Outlet />
      <Footer {...footerProps} />
    </div>
  );
};
