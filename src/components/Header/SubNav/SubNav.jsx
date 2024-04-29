import React from 'react';

import translations from '../../../mock/translations.json';

import { StyledSubNav } from './SubNavStyles';

const SubNav = ({ hideOnMobile }) => {
    const nestedMenuCloseIconPath = '/icons/nested-menu-close.svg';
    const flagIconPath = '/icons/flag.png';

    return (
        <StyledSubNav hideOnMobile={hideOnMobile}>
            <ul>
                <li><a href="#newsEventsPress">{translations.header.newsEvents}</a></li>
                <li><a href="/">{translations.header.about}</a></li>
                <li><a href="#footer">{translations.header.contact}</a></li>
                <li>
                    <img src={flagIconPath} alt={translations.altImageText.flag} />
                    <span>{translations.header.en}</span>
                    <img src={nestedMenuCloseIconPath} alt={translations.altImageText.nestedMenuClose} />
                </li>
            </ul>
        </StyledSubNav>
    );
};

export default SubNav;
