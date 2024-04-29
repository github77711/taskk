import styled from 'styled-components';

export const StyledSubNav = styled.div`
    display: ${props => props.hideOnMobile ? 'none' : 'flex'};

    ul {
        list-style: none;
        display: block;
        padding: 10px 0;
        margin-bottom: 7px;

        li {
            border-bottom: none;
            padding: 10px 0;
            display: flex;
            gap: 10px;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        margin-bottom: 0;

        ul {
            display: flex;
            margin: 0;
            padding: 0;

            li {
                padding: 23px 20px;
                position: relative;

                 &:not(:last-of-type)::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 15px;
                    height: 30px;
                    width: 1px;
                    background-color: #ccc;
                }

                &:hover:not(:last-of-type) {
                    a { 
                        opacity: 0.6;
                    }
                }

                a, span {
                    color: #e0e0e0;
                    font-weight: 600;
                    text-decoration: none;
                }
                
                img {
                    cursor: pointer;
                }
            }
        }
    }
`;