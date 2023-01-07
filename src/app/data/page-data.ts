import { FooterProps } from '../layout/Footer';
import { HeaderProps } from '../layout/Header';

export interface PageData {
  headerProps: HeaderProps;
  footerProps: FooterProps;
}

export const pageData: PageData = {
  headerProps: {
    title: 'Candywolf',
    subtitle: 'Szépség és egészség',
    navigation: [
      { path: '/', label: 'Főoldal' },
      { path: '/massage', label: 'Masszázs' },
      { path: '/lip', label: 'Ajaktöltés' },
    ],
  },
  footerProps: {
    social: {
      facebookLink: 'https://www.facebook.com/relaxtimeszeged',
    },
    contact: {
      mobile: '+36 30 769 5108',
      address: '6721, Szeged, Csongrádi sgt. 12.',
    },
    rights: '© 2022 Candywolf.',
  },
};
