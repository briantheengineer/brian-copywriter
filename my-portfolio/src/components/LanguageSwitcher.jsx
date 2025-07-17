import { useTranslation } from 'react-i18next';
import br from '../images/br.png';
import us from '../images/us.png';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const flagButton = (lang, img, alt) => (
    <button
      key={lang}
      onClick={() => i18n.changeLanguage(lang)}
      className={`rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none ${
        currentLang === lang
          ? 'ring-2 ring-yellow-400'
          : 'opacity-70 hover:opacity-100'
      }`}
    >
      <img
        src={img}
        alt={alt}
        className="w-6 h-6 object-cover rounded-full"
      />
    </button>
  );

  return (
    <div className="flex gap-2 items-center">
      {flagButton('en', us, 'English')}
      {flagButton('pt', br, 'Português')}
    </div>
  );
}
