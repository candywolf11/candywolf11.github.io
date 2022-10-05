
export interface CardProps {
  image: string;
  title: string;
  paragraphs: string[];
}

export const Card = ({
  image,
  title,
  paragraphs: paragraphList,
}: CardProps) => {
  const paragraphs = paragraphList.map((paragraph, index) => (
    <p
      className="mt-2 first-letter:mr-2 first-letter:text-xl first-letter:font-bold"
      key={index}
    >
      {paragraph}
    </p>
  ));

  return (
    <div className="flex flex-col p-5 shadow-xl">
      <div className="flex items-center">
        <div className="rounded-xl">
          <img src={image} alt="image" className="h-24 w-24 rounded-full" />
        </div>
        <h3 className="ml-2 font-medium">{title}</h3>
      </div>
      <div>{paragraphs}</div>
    </div>
  );
};
