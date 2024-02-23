import { CarouselConfig } from '../entities/Carousel';
import About from './About/AboutPage';
import Carousel from './Carousel/Carousel';
import ContactPage from './Contact/ContactPage';
import useTabsReferences from './Hooks/useTabsReferences';
import NavBar from './Navbar/NavBar';
import ServicesPage from './Services/ServicesPage';
import { ScrollRestoration } from 'react-router-dom';


const HomePage = () => {
  
const references = useTabsReferences();
const carouselConfig: CarouselConfig = {images: [
    {
      baseImageSrc: '/src/assets/image-3000x1500.jpg',
      imageAlt: 'Sunrise-Banner'
    },
    {
      baseImageSrc: '/src/assets/peticion-de-familiares-en-usa.jpg',
      imageAlt: 'Family'
    },
    {
      baseImageSrc: '/src/assets/migracion.webp',
      imageAlt: 'Migration'
    }
  ]
 };

    const scrollTo = (componentName: string) => {
            references[componentName as keyof typeof references]?.current?.scrollIntoView(false);
    }


    return (
      
        <>
        <ScrollRestoration/>
        <NavBar scrollTo={scrollTo}/>
        <Carousel config={carouselConfig}/>
        <ServicesPage ref={references.services}/>
        <About ref={references.about}/>
        <ContactPage ref={references.contacts}/>
        </>
    )
}

export default HomePage;