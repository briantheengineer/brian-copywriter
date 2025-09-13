import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Banner from '/src/images/banner-teste.jpg';
import SolisWp from '/src/images/soliswp.png';
import GlobalTrekwp from '/src/images/globaltrekwp.png';

const projects = [
  {
    id: 'solis-energy',
    titleKey: 'projects.solis.title',
    descriptionKey: 'projects.solis.description',
    imageUrl: SolisWp,
  },
  {
    id: 'globaltrek',
    titleKey: 'projects.globaltrek.title',
    descriptionKey: 'projects.globaltrek.description',
    imageUrl: GlobalTrekwp,
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Element name="projects">
        <div
          className="min-h-screen yellowbg py-16 px-4 md:px-16 max-w-full overflow-x-hidden flex flex-col gap-12 bluedark"
          style={{ paddingTop: '4rem' }}
        >
          <h1 className="w-full text-6xl tracking-wider font-bold text-right">{t('projects.title')}</h1>

          <div className="flex flex-col gap-12">
            {projects.map(({ id, titleKey, descriptionKey, imageUrl }, i) => (
              <div
                key={id}
                className={`flex flex-col md:flex-row items-stretch cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
               i % 2 === 0 ? 'md:flex-row md:space-x-6' : 'md:flex-row-reverse md:space-x-reverse md:space-x-6'
             }`}
             onClick={() => navigate(`/projects/${id}`)}
             data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
              >
                <img
                  src={imageUrl || Banner}
                  alt={t(titleKey)}
                  className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-[400px]"
                />
                <div className="md:w-1/2 px-4 md:px-6 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{t(titleKey)}</h2>
                  <p>{t(descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
}
