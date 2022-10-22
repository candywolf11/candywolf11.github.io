export interface MassageCardProps {
  image: string;
  title: string;
  paragraphs: string[];
  price: number;
  durationMin: number;
  details?: {
    description: string;
    price: number;
    durationMin: number;
  }[];
}

export const MassageCard = ({
  image,
  title,
  price,
  durationMin,
  paragraphs: paragraphList,
}: MassageCardProps) => {
  const paragraphs = paragraphList.map((paragraph, index) => (
    <p
      className="mt-2 font-serif first-letter:text-xl first-letter:font-bold"
      key={index}
    >
      {paragraph}
    </p>
  ));

  return (
    <div className="flex flex-col rounded-3xl bg-purple-100/30 shadow-lg shadow-purple-500/30 dark:bg-neutral-700/30  dark:shadow-neutral-800/30">
      <div className="flex items-center">
        <img src={image} alt="image" className="h-24 w-24 rounded-3xl" />
        <h3 className="pl-5 font-serif text-xl font-medium text-purple-500 dark:text-purple-300">
          {title}
        </h3>
      </div>

      <div className="flex-grow p-5">
        <div>{paragraphs}</div>
      </div>

      <div className="flex items-center justify-end gap-5 px-5 pb-5 font-serif text-xl">
        <p className="flex items-center gap-1">
          <span className="flex items-center gap-2 font-medium">
            <i className="fa-solid fa-sack-dollar fa-sm"></i>
            <span className="text-purple-500 dark:text-purple-300">{price.toLocaleString()}</span>
          </span>
          <span> HUF</span>
        </p>
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-hourglass fa-sm"></i>
          <span>{durationMin} perc</span>
        </p>
      </div>
    </div>
  );
};
