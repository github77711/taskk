import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    background-color: #D52228;
    position: relative;

    &::after {
        content: '';
        height: 1px; 
        background-color: #263345;  
        width: 100%; 
        position: absolute;
        bottom: 0;  
        left: 0;  
    }

    @media (min-width: 768px) {
        padding: 0px 60px;
        gap: 25px;
    }
`;

export const Logo = styled.div`
    img {
        height: 45px;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 768px) {
       width: 100%
    }
`;