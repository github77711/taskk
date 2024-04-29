import React from 'react';

import translations from '../../mock/translations.json';

import { GlobalSolutionTitle, GlobalSolutionWrapper, ImageWrapper } from './GlobalSolutionStyles';

const Products = () => {

    return <section id="solution">
        <GlobalSolutionTitle>{translations.globalSolutions.title}</GlobalSolutionTitle>
        <GlobalSolutionWrapper>
            <ImageWrapper>
                <img src="https://picsum.photos/1500/1000" alt={translations.altImageText.randomImage} />
                <div>
                    <h4>{translations.globalSolutions.heading} <br /> <span>{translations.globalSolutions.subheading}</span></h4>
                </div>
            </ImageWrapper>
        </GlobalSolutionWrapper>
    </section >;
};

export default Products;