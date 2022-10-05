import { cards, headerProps, mainTitle } from './data/Data';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main, MainProps } from './layout/Main';

export const App = () => {
  const mainProps: MainProps = {
    cards,
    mainTitle,
  };

  return (
    <div className="max-w-7xl p-8 mx-o my-auto mx-auto">
      <Header {...headerProps} />
      <Main {...mainProps} />
      <Footer />
    </div>
  );
};
