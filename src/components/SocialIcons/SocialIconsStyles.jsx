import styled from 'styled-components';

export const StyledIcons = styled.div`
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 95px;
    background-color: #E0E0E0;
    align-items: center;
    justify-content: center;
    border: 1px solid #9AA7B3;
    position: absolute;
    right: 0;
    top: 45px;

    @media (min-width: 768px) {
        width: 57px;
        height: 112px;
        top: 70px;
     }

    img, a {
        width: 35px;
        height: 35px;
    }
    
    a:hover {
        opacity: 0.7;
    }
`;

export const HorizontalLine = styled.hr`
    border: none;
    height: 1px;
    width: 48px;
    background-color: #9AA7B3;
    margin-top: 6px;
    margin-bottom: 6px;

    @media (min-width: 768px) {
        margin-top: 8px;
        margin-bottom: 8px;
     }
`;
