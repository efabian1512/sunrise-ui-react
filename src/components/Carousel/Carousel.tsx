import { useEffect, useState } from "react";
import './Carousel.scss';
import { CarouselConfig } from "../../entities/Carousel";

interface Props {
    config: CarouselConfig;
}

const Carousel = ({ config: { slideInterval = 5000, autoSlide = false, images = [] } }: Props) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const updatedItems = [...images.map((item, index) => ({...item, id: index, marginLeft: 0}))];

    const [items, setItems] = useState(updatedItems);

    useEffect(()=> {
         if(autoSlide) {
             const interval = setInterval(()=> {
                onNextClick();
         }, slideInterval);
        return () => clearInterval(interval);
    }
    }, autoSlide ? [items] : []);

    const selectImage = (index: number) => {
        setSelectedIndex(index);

        setItems([...items.map(item => item.id === items[0].id ? {...item, marginLeft: -100 * index} : item)]);
    };

    const onNextClick = () => {
          let finalPercentage = 0;
          let nextPosition = selectedIndex + 1;

          if(nextPosition <= items.length - 1) {
               finalPercentage = -100 * nextPosition;
           } else {
               nextPosition = 0;
           }

   
        setItems([...items.map(item => item.id === items[0].id ? {...item, marginLeft: finalPercentage} : item)]);
       

        setSelectedIndex(nextPosition);
     }

     const onPreviousClick = () => {
         let finalPercentage = 0;
         let previousPosition =  selectedIndex - 1;

         if (previousPosition >= 0) {
             finalPercentage = -100 * previousPosition;
         } else {
              previousPosition = items.length - 1;
              finalPercentage = -100 * previousPosition;
         }

    
         setItems([...items.map(item => item.id === items[0].id ? {...item, marginLeft: finalPercentage} : item)]);
         

         setSelectedIndex(previousPosition);
      }


    return (
        <div className="dsc-carousel card border-0 padt-5">
    <div className="dsc-carousel__btns fw-bold">
        <i onClick={onPreviousClick} className="bi bi-chevron-left"></i>
        <i onClick={onNextClick} className="bi bi-chevron-right"></i>
    </div>
    <div className="dsc-carousel__content">
        {items.map((image, index) => 
             <img key={index} style={{marginLeft: image.marginLeft + '%'}} src={image.baseImageSrc} className="card-img-top dsc-carousel__content-item  rounded-0 " alt="image.imageAlt"/>
        )}
    </div>
    <div className="dsc-carousel__steps">
        {items.map((step, index) => <div key={index} onClick={() => selectImage(index)} className={'dsc-carousel__steps-step dsc-carousel__steps-step-'+ (selectedIndex === index ? 'active' : '')}>
        </div> )}
    </div>
</div>
    )
}

export default Carousel;