import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Work  from '/src/assets/Work.svg'
export default function About ( ) {
    const { t } = useTranslation();
    return (
        <Element name="about">
        <div className="min-h-screen yellowbg px-4 py-16 md:px-16 max-w-full overflow-x-hidden flex flex-wrap justify-evenly bluedark">
            <div className="w-full h-fit border">
                <h1 data-aos="fade-left" className="text-6xl tracking-wider w-full">about.</h1>
            </div>
            <div data-aos="fade-right" className="w-full border flex md:flex-wrap items-center ">
                <div className='w-1/2 h-[90%] min-h-72 min-w-64'><img className='h-full w-full' src={Work} alt="" /></div>
                <div className='w-1/2 min-w-48'> <h1 className='whitespace-pre-line'>{t('about_me')}</h1></div>
            </div>
        </div>
        </Element>
    )
}