import { CardProps } from './components/Card';
import { HeaderProps } from './layout/Header';

export const headerProps: HeaderProps = {
  title: 'Relax Time',
  subtitle: 'Szépség es egészség',
};

export const cards: CardProps[] = [
  {
    title: 'Svedmasszazs',
    image: '/vite.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: 'Relaxacios Masszazs',
    image: '/vite.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
