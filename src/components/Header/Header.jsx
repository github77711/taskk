import React from 'react';

import Nav from './Nav/Nav'
import SubNav from './SubNav/SubNav'

import translations from '../../mock/translations.json';

import { StyledHeader, Logo, NavWrapper } from './HeaderStyles';

const Header = () => {
    const appLogoPath = '/app-logo.svg';

    return (
        <StyledHeader>
            <Logo>
                <img src={appLogoPath} alt={translations.altImageText.logo} />
            </Logo>
            <NavWrapper>
                <Nav />
                <SubNav hideOnMobile={true} />
            </NavWrapper>
        </StyledHeader>
    );
};

export default Header;
