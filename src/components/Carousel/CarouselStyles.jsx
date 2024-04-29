import styled from 'styled-components';

export const StyledSliderContainer = styled.div`
    position: relative;
    
    .slick-list {
        height: 400px;

        @media (min-width: 768px) {
            height: 500px;
        }
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 10;
        width: 65px;
        height: 65px;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        &:hover {
            background: #ada8a899;
        }


        img {
            width: 30px;
            height: 60px;
        }
    }

    .slick-prev, .slick-next {
        &::before {
            content: none; // This removes the default arrows
        }
    }

    .slick-prev {
        left: 20px;
    }

    .slick-next {
        right: 20px;
    }

      .slick-dots {
        bottom: 20px;
        li {
            margin: 0 3px;
            button {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: transparent;
                border: 1px solid #DBDBDB;

                &:before {
                    content: none;
                }
            }
        }

        .slick-active button {
            background-color: #C2212E;
            border-color: #C2212E;
        }
    }
`;


export const StyledHeading = styled.h1`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
    text-transform: capitalize;
    color: #ffffff;
    text-align: center;
    font-size: 50px;
`;

export const TitleLight = styled.span`
    font-weight: 100;
    display: inline;
    font-size: 50px;
`;

