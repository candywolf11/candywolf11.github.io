
export const Footer = () => (
  <footer className="font-serif mt-10 flex flex-col">
    <div className="flex gap-5">
      <div className="footer--social text-purple-500 dark:text-purple-300">
        <a href="https://www.facebook.com/relaxtimeszeged" target="_blank" className='hover:opacity-50'>
          <i className="fa-brands fa-square-facebook fa-4x"></i>
        </a>
      </div>

      <div className="flex flex-col gap-5 text-purple-500 dark:text-purple-300  font-medium">
        <div className="flex items-center">
          <i className="fa-solid fa-mobile fa-xl"></i>
          <h3 className="ml-5">+36 30 769 5108</h3>
        </div>
        <div className="flex items-center">
          <i className="fa-sharp fa-solid fa-location-dot fa-xl"></i>
          <h3 className="ml-5">
            6721, Szeged, Csongrádi sgt. 12.
          </h3>
        </div>
      </div>
    </div>

    <div className="mt-10 text-neutral-500">
      <p>© 2022 Candywolf.</p>
    </div>
  </footer>
);
