import { Element } from 'react-scroll';

export default function About ( ) {
    return (
        <Element name="about">
        <div className="min-h-screen yellowbg px-4 py-16 md:px-16 max-w-full overflow-x-hidden flex md:flex-wrap justify-evenly bluedark">
            <div className="w-1/2 border ">
                <h1 data-aos="fade-left" className="text-6xl tracking-wider">about.</h1>
            </div>
            <div data-aos="fade-right" className="w-1/2 border">
                <img></img>
            </div>
        </div>
        </Element>
    )
}