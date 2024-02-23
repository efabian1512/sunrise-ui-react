export interface CarouselImage {
    id?: number;
    baseImageSrc: string;
    x2ImageSrc?: string;
    x3ImageSrc?: string;
    baseImageSrcWebp?: string;
    x2ImageSrcWebp?: string;
    x3ImageSrcWebp?: string;
    normalImageType?: string;
    imageAlt: string;
    marginLeft?: number;
    isMultiSize?: boolean;
}