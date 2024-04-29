import React from 'react';

import translations from '../../mock/translations.json';

import { StyledIcons, HorizontalLine } from './SocialIconsStyles';

const SocialIcons = () => {

    const facebookIconPath = '/icons/facebook.svg'
    const youtubeIconPath = '/icons/youtube.svg'
    const facebookHyperlink ='https://www.facebook.com/EuroGamesTechnologyDigital'
    const youtubeHyperlink = 'https://www.youtube.com/@eurogamestechnology'

    return <StyledIcons>
        <a href={facebookHyperlink} target="_blank" rel="noreferrer">
            <img src={facebookIconPath} alt={translations.altImageText.facebook} />
        </a>
        <HorizontalLine />
        <a href={youtubeHyperlink} target="_blank" rel="noreferrer">
            <img src={youtubeIconPath} alt={translations.altImageText.youtube} />
        </a>
    </StyledIcons >;
};

export default SocialIcons;