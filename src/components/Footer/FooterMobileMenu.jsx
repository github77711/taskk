import React from 'react';

import SocialIcons from '../SocialIcons/SocialIcons';
import translations from '../../mock/translations.json';

import { StyledMobileFooter } from './FooterStyles';

const footerTexts = translations.footer;
const listItems = [footerTexts.newsEvents, footerTexts.about, footerTexts.contact, footerTexts.careers];

const FooterMobileMenu = () => {
    return (
        <StyledMobileFooter>
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>
                        <a href="#newsEventsPress">{item}</a>
                    </li>
                ))}
            </ul>
            <SocialIcons />
        </StyledMobileFooter>
    );
};

export default FooterMobileMenu;
