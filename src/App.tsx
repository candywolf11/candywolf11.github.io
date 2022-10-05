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
    <div className="max-w-7xl p-8 mx-o my-auto mx-auto">
      <Header {...headerProps} />
      <Content {...mainProps} />
      <Footer />
    </div>
  );
};
