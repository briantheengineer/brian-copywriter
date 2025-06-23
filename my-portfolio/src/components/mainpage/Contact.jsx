import { Element } from 'react-scroll';
import Learning from '/src/assets/Learning.svg'
export default function Contact () {
    return (
         <Element name="contact">
        <div className=" yellowbg px-4 min-h-screen max-w-full md:px-16 overflow-x-hidden flex md:flex-wrap justify-evenly bluedark">
            <div className="w-full">
                <h1 className="text-6xl tracking-wider w-full ">contact me.</h1>
            </div>
            <div className="w-full md:p-16">
                <div className='w-1/2'>
                    <img src={Learning} alt="" />
                </div>
                <div className='w-1/2'>
                    <p></p>
                </div>
            </div>
        </div>
        </Element>
    )
}