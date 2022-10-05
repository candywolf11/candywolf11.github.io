
export interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <header className='flex'>
      {/* <img src="/logo.svg" className="header--logo" alt="Logo" /> */}
      <i className="fa-solid fa-yin-yang fa-3x"></i>
      <div className="ml-2">
        <h1 className='font-bold text-xl'>{title}</h1>
        <h2 className='font-medium'>{subtitle}</h2>
      </div>
  </header>
);
