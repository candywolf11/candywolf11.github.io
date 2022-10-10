import { Card, CardProps } from '../components/Card';

export interface MassagePageProps {
  mainTitle: string;
  mainImage: string;
  cards: CardProps[];
}

export const MassagePage = ({ cards: cardList, mainTitle }: MassagePageProps) => {
  const cards = cardList.map((card, index) => <Card {...card} key={index} />);
  return (
      <main className="mt-10">
        <h1 className="font-serif text-bold text-center text-6xl">{mainTitle}</h1>

        <div className="mt-10 flex flex-row sm:justify-around">
          <img
            src="/massage/massage.jpg"
            alt="Massage image"
            className="h-1/2 sm:w-1/2 rounded-full"
          ></img>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-5">{cards}</div>
      </main>
  );
};
