import { Card, CardProps } from '../components/Card';
import './main.scss';

export interface MainProps {
  mainTitle: string,
  cards: CardProps[];
}

export const Main = ({ cards: cardList, mainTitle }: MainProps) => {
  const cards = cardList.map((card, index) => <Card {...card} key={index} />);
  return (
    <main>
      <h1 className="main--row">{mainTitle}</h1>
      <div className="main--row">
        <div className="main--image-wrapper">
          <img
            src="/massage/massage.jpg"
            alt="Massage image"
            className="main--image"
          ></img>
        </div>
      </div>

      <div className="main-cards">{cards}</div>
    </main>
  );
};
