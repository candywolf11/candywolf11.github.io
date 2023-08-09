import { MassageCard } from '../components/MassageCard';
import { massagePageData } from '../data';

export const MassagePage = () => {
  const { cards: cardList, mainTitle, mainImage } = massagePageData;

  const cards = cardList.map(card => (
    <MassageCard {...card} key={card.title} />
  ));
  return (
    <main className="flex flex-col gap-10">
      <h1 className="font-serif text-bold text-center text-6xl">{mainTitle}</h1>

      <div className="flex flex-row justify-center sm:justify-around">
        <img
          src={mainImage}
          alt="Massage"
          className="h-[160px] rounded-full sm:h-1/2 sm:w-1/2"
        ></img>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">{cards}</div>
    </main>
  );
};

export default MassagePage;
