import { cards, headerProps, mainTitle } from './data/Data';
import { Content, ContentProps } from './layout/Content';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

export const App = () => {
  const mainProps: ContentProps = {
    cards,
    mainTitle,
  };

  return (
    <div className="m-auto max-w-7xl bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 p-8 text-neutral-700 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 dark:text-neutral-300">
      <Header {...headerProps} />
      <Content {...mainProps} />
      <Footer />
    </div>
  );
};
