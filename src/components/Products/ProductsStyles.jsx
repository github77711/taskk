import styled from 'styled-components';

export const ProductsSection = styled.section`
    margin-top: 100px;
`;

export const ProductsWrapper = styled.div`
    text-align: center;
    position: relative;
    
    img {
        width: 420px;
        height: 595px;
    }

    h4 {
        position: absolute;
        bottom: 30px;
        left: 25px;
        color: #ffffff;
        margin: 0;
        z-index: 2;

        &:before {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            bottom: -115px;
            right: 80%;
            transform: translateX(50%);
            z-index: -1;
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 270px;
    height: 400px;
    position: relative;
    gap: 40px;
    overflow: hidden;

    @media (min-width: 900px) {
        width: 330px;
        height: 400px;
    }

    img {
        width: 270px;
        height: 400px;

        @media (min-width: 900px) {
            width: 330px;
            height: 400px;
        }
    }
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 1200px) {
        flex-direction: row;
        max-width: 80%;
        margin: 0 auto;
        justify-content: space-between;
    }
`;

export const ProductsTitle = styled.h2`
    text-align: center;
    font-size: 32px;
    font-weight: 500;
`;
