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
      "A masszázs ezen formája oldja a stresszt, nyugtatja az idegrendszert, felfrissíti az izmokat, bőrt, a vérkeringést, elősegíti a jó közérzet kialakulását és a nyugodt alvást. Feloldja az izomfeszülést, megnyugtat, és segít helyreállítani a vérnyomást, felfrissíti a vérkeringést. Laza, pihentető fogásokkal, olajjal végzett masszázs."
    ],
  },
  {
    title: 'Talpmasszázs',
    image: '/massage/massage-talp.jpg',
    paragraphs: [
     "Talpmasszázzsal rengeteg betegséget lehet kezelni, ugyanis a talp idegellátása rendkívül gazdag, több mint hetven ezer idegvégződés található rajta. Ezért alkalmas arra, hogy rajta keresztül a szervezet egészét kezeljük.",
     "A talpmasszázs szabályozza a hormontermelő mirigyek működését és csökkenti az esetleges fájdalmakat. Pozitívan hat szív- és keringési panaszoknál is, kedvezően befolyásolja a légzőszervi (asztma, allergia), a hólyag-, a vesepanaszokat, az emésztési zavarokat, és a reumát is. Serkenti a vér- és nyirokkeringést, ezáltal elősegíti a lerakódott salakanyagok távozását, és erősíti az immunrendszert.",
     "A reflexzónás talpmasszázs célja a test öngyógyító képességének aktivizálása, mely során a test harmóniába kerül és felerősödik az immunrendszer, fokozódik a méreganyagok ürülése a szervezetből, valamint a talp masszírozása eredményesen befolyásolhatja a legtöbb belső szervünk működését."
    ],
  },
];
