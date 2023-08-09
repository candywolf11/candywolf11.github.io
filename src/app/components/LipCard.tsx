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
  const paragraphs = paragraphList.map(paragraph => (
    <p
      className="font-serif mt-2 first-letter:text-xl first-letter:font-bold"
      key={paragraph}
    >
      {paragraph}
    </p>
  ));

  return (
    <div className="flex cursor-pointer flex-col rounded-3xl bg-purple-100/30 shadow-lg shadow-purple-500/30 hover:bg-purple-100/50 hover:shadow-xl hover:shadow-purple-500/30 dark:bg-neutral-700/30 dark:shadow-neutral-800/30 hover:dark:bg-neutral-700/50 hover:dark:shadow-neutral-800/30">
      <div className="flex items-center">
        <img src={image} alt="Lip" className="h-24 w-24 rounded-3xl" />
        <h3 className="font-serif pl-5 text-xl font-medium text-purple-500 dark:text-purple-300">
          {title}
        </h3>
      </div>

      <div className="flex-grow p-5">
        <div>{paragraphs}</div>
      </div>
    </div>
  );
};
