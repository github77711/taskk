import React from 'react';

import translations from '../../mock/translations.json';

import SocialIcons from '../SocialIcons/SocialIcons';

import { footerItems } from '../../mock/data';

import { StyledDesktopFooter, StyledWrapper } from './FooterStyles';

const FooterDesktopMenu = () => {
  return (
    <StyledDesktopFooter>
      {footerItems.map((list) => (
        <StyledWrapper key={list.id}>
          <h4>{list.title}</h4>
          <ul>
            {list.items.map((item, index) => (
              <li key={index}>
                <a href={`#${list.anchor}`}>{item}</a>
              </li>
            ))}
          </ul>
        </StyledWrapper>
      ))}
      <div>
        <h4>{translations.footer.social}</h4>
        <SocialIcons />
      </div>
    </StyledDesktopFooter>
  );
};

export default FooterDesktopMenu;
