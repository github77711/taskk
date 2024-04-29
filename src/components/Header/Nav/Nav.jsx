import React, { useState } from 'react';

import { menuItems, submenuItems } from '../../../mock/data';

import translations from '../../../mock/translations.json';

import SubNav from '../SubNav/SubNav';

import { DesktopNav, MobileMenu, MenuIcon } from './NavStyles';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [subMenuOpenIndex, setSubMenuOpenIndex] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (index) => {
        setSubMenuOpenIndex(subMenuOpenIndex === index ? null : index);
    };

    return (
        <div>
            <MobileMenu className={isMenuOpen ? 'open' : ''}>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.key} onClick={() => toggleSubMenu(item.key)}>
                            <button className={subMenuOpenIndex === item.key ? 'open-accordion' : ''}>
                                {item.label}
                                <span>{subMenuOpenIndex === item.key ? <img src="/icons/nested-menu-open.svg" alt={translations.altImageText.close} />
                                    : <img src="/icons/nested-menu-close.svg" alt={translations.altImageText.open} />}</span>
                            </button>
                            {subMenuOpenIndex === item.key && (
                                <div>
                                    <ul className="dropdown">
                                        {submenuItems[item.key].map(subitem => (
                                            <li key={subitem.id}><a href={`#${subitem.id}`}>{subitem.label}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                    <SubNav hideOnMobile={false} />
                </ul>
            </MobileMenu>
            <DesktopNav>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.key}>
                            <a href="/">
                                {item.label}
                            </a>
                            <div>
                                <ul className="dropdown">
                                    {submenuItems[item.key].map(subitem => (
                                        <li key={subitem.id}><a href={`#${subitem.id}`}>{subitem.label}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </DesktopNav>
            <MenuIcon onClick={toggleMenu}>
                {isMenuOpen ? <img src="/icons/close-menu.svg" alt={translations.altImageText.close} /> : <img src="/icons/open-menu.svg" alt={translations.altImageText.open} />}
            </MenuIcon>
        </div>
    );
};

export default Nav;
