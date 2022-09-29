import './Header.scss';

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <header>
      <img src="/vite.svg" className="header--logo" alt="Logo" />
      <div className="header--title">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
  </header>
);
