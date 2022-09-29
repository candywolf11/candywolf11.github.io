import './Card.scss';

export interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const Card = ({ image, title, description }: CardProps) => (
  <div className="card">
    <div className="card--header">
      <div className="card--image-wrapper">
        <img src={image} alt="image" className="card--image" />
      </div>
      <h3 className="card--title">{title}</h3>
    </div>
    <p className="card--description">{description}</p>
  </div>
);
