import { CardProps } from '../components/Card';
import { HeaderProps } from '../layout/Header';

export const headerProps: HeaderProps = {
  title: 'Relax Time',
  subtitle: 'Szépség és egészség',
};

export const mainTitle = 'Masszázs és Ajaktöltés';

export const cards: CardProps[] = [
  {
    title: 'Svédmasszázs',
    image: '/massage/massage-sved.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: 'Relaxációs Masszázs',
    image: '/massage/massage-relax.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: 'Talpmasszázs',
    image: '/massage/massage-talp.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
