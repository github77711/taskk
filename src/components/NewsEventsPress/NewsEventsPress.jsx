import React from 'react';

import translations from '../../mock/translations.json';
import { newsEventsPressData } from '../../mock/data';

import { NewsEventPressSection, ArticleWrapper, TitleWrapper, Icon, Title, Image, DateLocation, Heading, Text, ReadMoreButton } from './NewsEventsPressStyles';

const Article = ({ icon, title, image, heading, dateLocation, text }) => {
    return (
        <ArticleWrapper>
            <TitleWrapper>
                <Icon src={icon} alt={title} />
                <Title>{title}</Title>
            </TitleWrapper>
            <Image src={image} alt={title} />
            <Heading>{heading}</Heading>
            <DateLocation>{dateLocation}</DateLocation>
            <Text>{text}</Text>
            <ReadMoreButton>{translations.newsEventsPress.readMore}</ReadMoreButton>
        </ArticleWrapper>
    );
};

const NewsEventsPress = () => {
    return (
        <NewsEventPressSection id="newsEventsPress">
            {newsEventsPressData.map((item) => (
                <Article
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    image={item.image}
                    heading={item.heading}
                    dateLocation={item.dateLocation}
                    text={item.text}
                    />
            ))}
        </NewsEventPressSection>
    );
};

export default NewsEventsPress;
