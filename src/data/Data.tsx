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
    paragraphs: [
      'Hippokratész a következőket írta: „Az egészség útja mindennap egy fürdő és egy illatos masszázs."',
      'A masszázst gyakran afféle extravagáns, luxus számba menő dolognak tekintik. Kevesen gondolnak rá, mint működő gyógymódra. Pedig az. A masszázsterápia az orvoslás egyik legegyszerűbb és legrégebbi formája, több ezer éves múltra tekint vissza.',
      'A rendszeres masszázs jóval több, mint  luxus. Inkább egy befektetés az egészségbe.',
      'A svédmasszázs egyszerre pihentető és frissítő hatású. Az egymásra épülő és eltérő erősségű tradicionális fogások fokozzák a test aktivitását. Hatására egy új életérzés költözik a testbe.',
    ],
  },
  {
    title: 'Relaxációs Masszázs',
    image: '/massage/massage-relax.jpg',
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  {
    title: 'Talpmasszázs',
    image: '/massage/massage-talp.jpg',
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
];
