import { homePageData } from '../data';

export const HomePage = () => {
  const { mainTitle, profileImage } = homePageData;
  return (
    <main className="mt-10 flex flex-col items-center">
      <h1 className="text-bold font-serif text-6xl">{mainTitle}</h1>
      <div className="mt-10 flex justify-around rounded">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full sm:w-1/2 sm:h-1/2 md:w-1/4 md:h-1/4"
        />
      </div>
    </main>
  );
};
