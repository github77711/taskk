import React from 'react';

import FooterMobileMenu from './FooterMobileMenu';
import FooterDesktopMenu from './FooterDesktopMenu';

import translations from '../../mock/translations.json';

import { StyledFooter } from './FooterStyles';

const Footer = () => {
  return (
    <footer id="footer">
      <FooterMobileMenu />
      <FooterDesktopMenu />
      <StyledFooter>
        {translations.footer.text}
      </StyledFooter >
    </footer>
  );
};

export default Footer;
