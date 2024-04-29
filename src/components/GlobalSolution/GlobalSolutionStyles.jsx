import styled from 'styled-components';

export const GlobalSolutionTitle = styled.h2`
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    margin-top: 100px;
`;

export const GlobalSolutionWrapper = styled.div`
    h4 {
        position: absolute;
        bottom: 30px;
        left: 16px;
        color: #ffffff;
        margin: 0;
        z-index: 2;
        font-size: 32px;
        font-weight: 500;
        display: grid;

        span {
            font-size: 20px;
        }

        &:before {
            content: '';
            position: absolute;
            width: 350px;
            height: 350px;
            background-color: rgba(22,117,170,255);
            opacity: 0.8;
            border-radius: 50%;
            bottom: -170px;
            right: 80%;
            transform: translateX(50%);
            z-index: -1;
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 80%;
    height: 400px;
    position: relative;
    gap: 40px;
    overflow: hidden;
    margin: 0 auto;

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`;
