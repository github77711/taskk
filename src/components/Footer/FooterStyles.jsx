import styled from 'styled-components';

export const StyledMobileFooter = styled.div`
    background-color: #e0e0e0;
    margin-top: 100px;
    padding: 50px 0 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        position: relative;
        flex-direction: row;
        gap: 20px;
        border: none;
        top: 0;
        height: 35px;

        hr {
            display: none;
        }
    }

    ul {
        list-style: none;
        text-align: center;
        padding: 0;

        li a {
            color: #788090;
            margin: 10px 0;
            text-decoration: none;
            display: block;
        }
    }

    @media (min-width: 900px) {
        display: none;
    }
`;

export const StyledDesktopFooter = styled.div`
    display: none;

    @media (min-width: 900px) {
        background-color: #e0e0e0;
        margin-top: 100px;
        padding: 20px 20px 80px 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        place-content: center;
        gap: 35px;
        justify-content: space-between;
    }

    @media (min-width: 1088px) {
        padding: 20px 11% 80px 10%;
    }

    h4 {
        text-transform: uppercase;
        color: #4b5361;
    }

    ul {
        list-style: none;
        padding: 0;
        position: relative;

          li a {
            color: #788090;
            margin: 10px 0;
            text-decoration: none;
            display: block;
        }
    }

    div:last-child {
        position: relative;
        flex-direction: row;
        gap: 20px;
        border: none;
        height: 35px;
        right: -15px;
        top: 0;

        hr {
            display: none;
        }
    }
`;

export const StyledWrapper = styled.div`
    position: relative;

    &:nth-of-type(5)::before {
        content: '';
        position: absolute;
        left: -30px;
        top: 24px;
        height: 200px;
        width: 2px;
        background-color: #cccccc;
        display: block;
    }
`;

export const StyledFooter = styled.div`
    height: 50px;
    background-color: #DA2228;
    color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;