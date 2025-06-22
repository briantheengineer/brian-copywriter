import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Brian from '/src/images/brian.jpg.jpeg'

export default function Home () {
    const { t } = useTranslation();
    return (
        <Element name="home">
        <div className=" bluedark min-h-screen w-full flex md:flex-wrap lg:flex-nowrap items-center justify-evenly">
            <div data-aos="fade-left" className="border w-fit p-5 max-w-1/2"> 
                <h3 className="text-5xl">{t('greeting')}</h3>
                <h1 className="text-8xl ">{t('role')}</h1> 
                <button className="p-2 yellowbutton border rounded-sm my-5 shadow-2xl shadow-outline ">{t('resume')}</button>
            </div>

            <div data-aos="fade-right" >
                <div className='h-96 w-96 rounded-full border overflow-hidden '>
                    <img className='w-full h-full object-cover object-left-top ' src={Brian}></img>
                </div>
            </div>
        </div>
        </Element>
    )
}