import styled from 'styled-components';

export const MenuIcon = styled.div`
    font-size: 24px;
    cursor: pointer;
    display: block;
    position: relative;
    z-index: 1000;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MobileMenu = styled.nav`
    display: none;
    position: absolute;
    top: 64px;
    background-color: #e0e0e0;
    width: 96%;
    right: 0;
    z-index: 1000;
    padding-bottom: 20px;

    button, a {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        text-decoration: none;
        width: 100%;
        border: none;
        background: transparent;
        padding: 0;
        color: #000000;
        font-size: 14px;
    }

    span {
        font-weight: 600;
        font-size: 14px;
    }

    .open-accordion {
        color: #c2212e;
    }

    &.open {
        display: block;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding: 17px 0;
        margin: 0 30px;
        border-bottom: 1px solid #ccc;

        &:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        button:active, a:active {
            color: #c2212e;
        }

        ul {
            padding: 0;
            margin-top: 10px;

            li {
                padding: 10px;
                border-bottom: none;
                margin: 0;
            }
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: -65px;
        right: 0;
        width: 73px;
        height: 66px;
        background-color: #e0e0e0;
    }
`;

export const DesktopNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
        display: block;

        ul {
            display: flex;
            list-style: none;
            margin: 0;
        }

        li {
            padding: 23px 15px;
            position: relative;

            ul.dropdown {
                display: none;
                position: absolute;
                padding: 0;
                width: 145px;
                left: 0;
                top: 64px;
                background-color: #e0e0e0;
                z-index: 1000;
                min-width: 157px;

                li {
                    padding: 15px;

                    &:not(:last-of-type)::after {
                        content: '';
                        position: absolute;
                        left: 15px;
                        top: 48px;
                        height: 2px;
                        width: 125px;
                        background-color: #ccc;
                    }

                    a {
                        color: #000000;
                        font-weight: 600;
                        
                        &:hover {
                            color: #c2212e;
                        }
                    }

                }
            }

            &:hover {
                background-color: #e0e0e0;

                ul.dropdown {
                    display: block;
                }

                a {
                    color: #c2212e;
                }
            }
        }

        a {
            text-decoration: none;
            color: #e0e0e0;
            font-weight: 600;
        }
    }
`;