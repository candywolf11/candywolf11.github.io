import '../sass/main.scss';

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
    <p className="card--paragraph" key={index}>
      {paragraph}
    </p>
  ));

  return (
    <div className="card">
      <div className="card--header">
        <div className="card--image-wrapper">
          <img src={image} alt="image" className="card--image" />
        </div>
        <h3 className="card--title">{title}</h3>
      </div>
      <div>{paragraphs}</div>
    </div>
  );
};
