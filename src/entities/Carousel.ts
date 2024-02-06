import { CarouselImage } from "./CarouselImage";

export interface CarouselConfig {
    images: CarouselImage[];
    autoSlide?: boolean;
    slideInterval?: number;
}
