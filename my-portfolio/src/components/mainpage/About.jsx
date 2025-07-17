import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Work from '/src/assets/Work.svg';

export default function About() {
  const { t } = useTranslation();

  return (
    <Element name="about">
      <div className="min-h-screen yellowbg px-4 py-16 md:px-16 max-w-full overflow-x-hidden flex flex-col bluedark">
        <div className="w-full mb-12">
          <h1
            data-aos="fade-left"
            className="text-4xl md:text-6xl font-bold tracking-wider"
          >
            {t('navbar.about')}.
          </h1>
        </div>

        <div
          data-aos="fade-right"
          className="w-full flex flex-col md:flex-row items-start gap-10"
        >
          <div className="w-full md:w-1/2">
            <img
              className="max-w-full h-auto object-contain"
              src={Work}
              alt="Work Illustration"
            />
          </div>

          <div className="w-full md:w-1/2 text-lg leading-8 whitespace-pre-line text-justify">
            {t('about_me')}
          </div>
        </div>
      </div>
    </Element>
  );
}
