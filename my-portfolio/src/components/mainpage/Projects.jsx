import { Element } from 'react-scroll';
export default function Projects () {
    return (
        <Element name="projects">
       <div className="min-h-screen yellowbg py-16 px-4 md:px-16 max-w-full overflow-x-hidden flex md:flex-wrap justify-evenly bluedark">
            <div data-aos="fade-down" className="w-full text-6xl tracking-wider">PROJECTS.</div>


            <div data-aos="fade-left" className="text-left w-full border">
                <div> text</div>
                <div>img</div>
            </div>

            <div data-aos="fade-right" className="w-full text-right">
                <div> text</div>
                <div>img</div>
            </div>

            <div data-aos="fade-left" className="text-left w-full">
                <div> text</div>
                <div>img</div>
            </div>
        </div>
        </Element>
    )
}