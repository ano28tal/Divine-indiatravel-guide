import { divinePlacesPageContent } from "../constants";

export const DivinePlacesHero = () => {
  const { hero } = divinePlacesPageContent;

  return (
    <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-[1400px] mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.title}</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {hero.description}
        </p>
      </div>
    </div>
  );
};
