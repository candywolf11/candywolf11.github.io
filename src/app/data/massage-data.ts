import { MassageCardProps } from '../components/MassageCard';

export interface MassagePageData {
  mainTitle: string;
  mainImage: string;
  cards: MassageCardProps[];
}

export const massagePageData: MassagePageData = {
  mainTitle: 'Masszázs',
  mainImage: '/massage/massage.jpg',
  cards: [
    {
      title: 'Svédmasszázs',
      image: '/massage/massage-sved.jpg',
      paragraphs: [
        'Hippokratész a következőket írta: „Az egészség útja mindennap egy fürdő és egy illatos masszázs."',
        'A masszázst gyakran afféle extravagáns, luxus számba menő dolognak tekintik. Kevesen gondolnak rá, mint működő gyógymódra. Pedig az. A masszázsterápia az orvoslás egyik legegyszerűbb és legrégebbi formája, több ezer éves múltra tekint vissza.',
        'A rendszeres masszázs jóval több, mint  luxus. Inkább egy befektetés az egészségbe.',
        'A svédmasszázs egyszerre pihentető és frissítő hatású. Az egymásra épülő és eltérő erősségű tradicionális fogások fokozzák a test aktivitását. Hatására egy új életérzés költözik a testbe.',
      ],
      prices: [
        { description: 'Svédmasszázs', price: 8000, durationMin: 60 },
        { description: 'Hátmasszázs', price: 5000, durationMin: 30 },
      ],
    },
    {
      title: 'Relaxációs Masszázs',
      image: '/massage/massage-relax.jpg',
      paragraphs: [
        'A masszázs ezen formája oldja a stresszt, nyugtatja az idegrendszert, felfrissíti az izmokat, bőrt, a vérkeringést, elősegíti a jó közérzet kialakulását és a nyugodt alvást. Feloldja az izomfeszülést, megnyugtat, és segít helyreállítani a vérnyomást, felfrissíti a vérkeringést. Laza, pihentető fogásokkal, olajjal végzett masszázs.',
        'Az aromaterápiás olajokkal  történő relaxációs masszázs, a frissítő masszázs és az illóolajok jótékony hatását ötvözi. Ez a masszázstípus amely a természetes gyógymódok közé tartozik, és magában foglalja a gyógynövények és a masszázskezelés előnyeit. Masszázs során az olajok felszívódnak a bőrön keresztül, átjutva a bőr felhámján és bekerülnek a vérkeringésbe, ami által kapcsolatba kerülnek a szervezettel. Az egész szervezetre serkentőleg hat, illetve vizelethajtó, gombaölő, baktériumölő, gyulladás csökkentő hatással is. A bőrt belülről táplálják, regenerálják.',
      ],
      prices: [
        { description: 'Relaxációs Masszázs', price: 8000, durationMin: 60 },
        {
          description: 'Meleg olajos masszázs',
          price: 10500,
          durationMin: 60,
        },
        { description: 'Aromaolajos Masszázs', price: 8500, durationMin: 60 },
        { description: 'Testradírozás', price: 8000, durationMin: 30 },
      ],
    },
    {
      title: 'Talpmasszázs',
      image: '/massage/massage-talp.jpg',
      paragraphs: [
        'Talpmasszázzsal rengeteg betegséget lehet kezelni, ugyanis a talp idegellátása rendkívül gazdag, több mint hetven ezer idegvégződés található rajta. Ezért alkalmas arra, hogy rajta keresztül a szervezet egészét kezeljük.',
        'A talpmasszázs szabályozza a hormontermelő mirigyek működését és csökkenti az esetleges fájdalmakat. Pozitívan hat szív- és keringési panaszoknál is, kedvezően befolyásolja a légzőszervi (asztma, allergia), a hólyag-, a vesepanaszokat, az emésztési zavarokat, és a reumát is. Serkenti a vér- és nyirokkeringést, ezáltal elősegíti a lerakódott salakanyagok távozását, és erősíti az immunrendszert.',
        'A reflexzónás talpmasszázs célja a test öngyógyító képességének aktivizálása, mely során a test harmóniába kerül és felerősödik az immunrendszer, fokozódik a méreganyagok ürülése a szervezetből, valamint a talp masszírozása eredményesen befolyásolhatja a legtöbb belső szervünk működését.',
      ],
      prices: [{ description: 'Talpmasszázs', price: 4500, durationMin: 30 }],
    },
  ],
};
