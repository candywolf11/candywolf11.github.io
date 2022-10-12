export interface LipCardProps {
  image: string;
  title: string;
  paragraphs: string[];
}

export const LipCard = ({
  image,
  title,
  paragraphs: paragraphList,
}: LipCardProps) => {
  const paragraphs = paragraphList.map((paragraph, index) => (
    <p
      className="mt-2 font-serif first-letter:mr-2 first-letter:text-xl first-letter:font-bold first-letter:text-purple-500 dark:first-letter:text-purple-300"
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
    </div>
  );
};
