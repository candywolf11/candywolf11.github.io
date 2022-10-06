export interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <header className="flex items-center">
    {/* <img src="/logo.svg" className="header--logo" alt="Logo" /> */}
    <i className="fa-solid fa-yin-yang fa-3x"></i>
    <div className="ml-5">
      <h1 className="font-serif text-xl font-medium text-purple-500 dark:text-purple-300">
        {title}
      </h1>
      <h2 className="font-medium">{subtitle}</h2>
    </div>
  </header>
);
