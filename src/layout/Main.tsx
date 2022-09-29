import { Card, CardProps } from '../components/Card';
import './Main.scss';

export interface MainProps {
  cards: CardProps[];
}

export const Main = ({ cards }: MainProps) => {
  const cardList = cards.map(card => <Card {...card} />);
  return <main>{cardList}</main>;
};
