import './App.scss';
import { cards, headerProps } from './Data';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main, MainProps } from './layout/Main';

export const App = () => {
  const mainProps: MainProps = {
    cards,
  };

  return (
    <div className="App">
      <Header {...headerProps} />
      <Main {...mainProps} />
      <Footer />
    </div>
  );
};
