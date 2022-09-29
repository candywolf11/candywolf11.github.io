import { Card, CardProps } from '../components/Card';
import './Main.scss';

export interface MainProps {
  cards: CardProps[];
}

export const Main = ({ cards: cardList }: MainProps) => {
  const cards = cardList.map(card => <Card {...card} />);
  return (
    <main>
      <h1 className="main--row">Masszázs és Ajaktöltés</h1>
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
