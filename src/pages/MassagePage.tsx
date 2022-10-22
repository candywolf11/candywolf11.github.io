import { MassageCard } from '../components/MassageCard';
import { massagePageData } from '../data';

export const MassagePage = () => {
  const { cards: cardList, mainTitle, mainImage } = massagePageData;

  const cards = cardList.map((card, index) => (
    <MassageCard {...card} key={index} />
  ));
  return (
    <main className="flex flex-col gap-10">
      <h1 className="font-serif text-bold text-center text-6xl">{mainTitle}</h1>

      <div className="flex flex-row justify-center sm:justify-around">
        <img
          src={mainImage}
          alt="Massage image"
          className="h-[160px] sm:h-1/2 sm:w-1/2 rounded-full"
        ></img>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">{cards}</div>
    </main>
  );
};
