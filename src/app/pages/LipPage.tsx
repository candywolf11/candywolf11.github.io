import { LipCard } from "../components/LipCard";
import { lipPageData } from "../data";

export const LipPage = () => {
  const { cards: cardList, mainTitle, mainImage } = lipPageData;

  const cards = cardList.map((card) => <LipCard {...card} key={card.title} />);
  return (
      <main className="flex flex-col gap-10">
        <h1 className="font-serif text-bold text-center text-6xl">{mainTitle}</h1>

        <div className="flex flex-row justify-center sm:justify-around">
          <img
            src={mainImage}
            alt="Lip"
            className="h-[160px] sm:h-[300px] sm:w-1/2 rounded-full"
          ></img>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">{cards}</div>
      </main>
  );
};
