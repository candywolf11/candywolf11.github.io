export interface FooterProps {
  social: {
    facebookLink: string;
  };
  contact: {
    mobile: string;
    address: string;
  };
  rights: string;
}

export const Footer = ({ social, contact, rights }: FooterProps) => (
  <footer className="flex flex-col font-serif gap-10">
    <div className="flex gap-5">
      <div className="footer--socia">
        <a
          href={social.facebookLink}
          target="_blank"
          className="hover:text-purple-500  dark:hover:text-purple-300"
        >
          <i className="fa-brands fa-square-facebook fa-4x"></i>
        </a>
      </div>

      <div className="flex flex-col gap-5 font-medium ">
        <div className="flex items-center">
          <i className="fa-solid fa-mobile fa-xl"></i>
          <h3 className="ml-5">{contact.mobile}</h3>
        </div>
        <div className="flex items-center">
          <i className="fa-sharp fa-solid fa-location-dot fa-xl"></i>
          <h3 className="ml-5">{contact.address}</h3>
        </div>
      </div>
    </div>

    <div className="text-neutral-500">
      <p>{rights}</p>
    </div>
  </footer>
);
