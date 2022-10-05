import { Card, CardProps } from '../components/Card';

export interface MainProps {
  mainTitle: string;
  cards: CardProps[];
}

export const Main = ({ cards: cardList, mainTitle }: MainProps) => {
  const cards = cardList.map((card, index) => <Card {...card} key={index} />);
  return (
      <main className="mt-10">
        <h1 className="text-bold text-center text-6xl">{mainTitle}</h1>

        <div className="mt-10 flex flex-row justify-around">
          <img
            src="/massage/massage.jpg"
            alt="Massage image"
            className="h-1/2 w-1/2 rounded-full"
          ></img>
        </div>

        <div className="mt-10 flex flex-col gap-5">{cards}</div>
      </main>
  );
};
