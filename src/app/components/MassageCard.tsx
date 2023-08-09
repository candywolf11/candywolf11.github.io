import { useState } from 'react';

export interface MassageCardProps {
  image: string;
  title: string;
  paragraphs: string[];
  prices: {
    description: string;
    price: number;
    durationMin: number;
  }[];
}

export const MassageCard = ({
  image,
  title,
  prices: pricesList,
  paragraphs: paragraphList,
}: MassageCardProps) => {
  const [isPricesShown, setIsPricesShown] = useState(false);

  const hidePrices = () =>
    isPricesShown ? setIsPricesShown(false) : undefined;

  const togglePrices = () => setIsPricesShown(state => !state);

  const paragraphs = paragraphList.map(paragraph => (
    <p
      className="font-serif first-letter:text-xl first-letter:font-bold"
      key={paragraph}
    >
      {paragraph}
    </p>
  ));

  const prices = pricesList
    .sort(({ price: p1 }, { price: p2 }) =>
      p1 <= p2 ? (p1 === p2 ? 0 : -1) : 1,
    )
    .map(({ description, price, durationMin }) => (
      <div className="mt-5 first:mt-0" key={description}>
        <div className="font-medium">{description}</div>
        <div className="flex items-center justify-end gap-3">
          <p className="flex items-center gap-1">
            <span className="text-purple-500 dark:text-purple-300">
              {price.toLocaleString()}
            </span>
            <span> HUF</span>
          </p>
          <p className="flex items-center gap-1">
            <i className="fa-solid fa-hourglass fa-xs"></i>
            <span>{durationMin} perc</span>
          </p>
        </div>
      </div>
    ));

  return (
    <div
      onMouseLeave={hidePrices}
      className="group relative flex cursor-default flex-col overflow-hidden rounded-3xl bg-purple-100/30 shadow-lg shadow-purple-500/30 hover:bg-purple-100/50 hover:shadow-xl hover:shadow-purple-500/30 dark:bg-neutral-700/30 dark:shadow-neutral-800/30 hover:dark:bg-neutral-700/50 hover:dark:shadow-neutral-800/30"
    >
      <div className="flex items-center">
        <img
          src={image}
          alt={title + ' Massage'}
          className="h-24 w-24 rounded-3xl"
        />
        <h3 className="font-serif pl-5 text-xl font-medium text-purple-500 dark:text-purple-300">
          {title}
        </h3>
      </div>

      <div className="h-96 flex-grow overflow-y-auto p-5">
        {isPricesShown ? prices : paragraphs}
      </div>

      <div className="m-5 flex justify-end p-5">
        <span
          onClick={togglePrices}
          className="font-serif absolute cursor-pointer text-xl font-medium duration-500 hover:scale-110 xl:bottom-[-40px] xl:group-hover:bottom-6"
        >
          {isPricesShown && (
            <>
              <i className="fa-solid fa-edit fa-sm"></i>
              <span className="ml-2">Leírás</span>
            </>
          )}
          {!isPricesShown && (
            <>
              <i className="fa-solid fa-sack-dollar fa-sm"></i>
              <span className="ml-2">Áraim</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};
