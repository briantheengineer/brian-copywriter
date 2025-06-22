import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
export default function About ( ) {
    const { t } = useTranslation();
    return (
        <Element name="about">
        <div className="min-h-screen yellowbg px-4 py-16 md:px-16 max-w-full overflow-x-hidden flex md:flex-wrap justify-evenly bluedark">
            <div className="w-full h-fit">
                <h1 data-aos="fade-left" className="text-6xl tracking-wider w-full">about.</h1>
                <div className='border w-1/4'></div>
            </div>
            <div data-aos="fade-right" className="w-full border ">
                <div className='w-1/2'><img></img></div>
                <div className='w-1/2'> <h1 className='whitespace-pre-line'>{t('about_me')}</h1></div>
            </div>
        </div>
        </Element>
    )
}