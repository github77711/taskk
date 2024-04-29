import React from 'react';
import Slider from 'react-slick';

import translations from '../../mock/translations.json';

import SocialIcons from '../SocialIcons/SocialIcons';

import { StyledSliderContainer, StyledHeading, TitleLight } from './CarouselStyles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [1, 2, 3].map(n => `https://picsum.photos/1920/1080?random=${n}`);

const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
        <img src='/icons/right-arrow.svg' alt={translations.altImageText.next} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
        <img src='/icons/left-arrow.svg' alt={translations.altImageText.prev} />
    </div>
);

const data = translations.carousel;

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            },
        ]
    };

    return (
        <StyledSliderContainer>
            <Slider {...settings}>
                {images.map((imgSrc, index) => (
                    <div key={index}>
                        <img src={imgSrc} alt={`${translations.altImageText.random} ${index + 1}`} />
                    </div>
                ))}
            </Slider>
            <StyledHeading><TitleLight>{data.titleLight}</TitleLight>
                {data.titleBold} <br /> {data.titleBoldSecondary}</StyledHeading>
            <SocialIcons />
        </StyledSliderContainer>
    );
};

export default ImageSlider;
