import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Brian from '/src/images/brian.jpg.jpeg';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Element name="home">
      <div className="bluedark min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-evenly px-4 py-10 gap-10">
        
        <div data-aos="fade-left" className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl md:text-5xl">{t('greeting')}</h3>
          <h1 className="text-5xl sm:text-6xl md:text-8xl">{t('role')}</h1>
          <button className="p-2 mt-5 yellowbutton border rounded-sm shadow-2xl">
            {t('resume')}
          </button>
        </div>

        <div data-aos="fade-right" className="w-full md:w-1/3 flex justify-center">
          <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border overflow-hidden">
            <img
              src={Brian}
              alt="Brian"
              className="w-full h-full object-cover object-left-top"
            />
          </div>
        </div>

      </div>
    </Element>
  );
}
