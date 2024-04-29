import translations from './translations.json';

export const menuItems = [
    { key: 1, label: translations.header.rLine },
    { key: 2, label: translations.header.sLine },
    { key: 3, label: translations.header.tLine },
    { key: 4, label: translations.header.sbg }
];

export const submenuItems = {
    1: [
        { id: 'subitem1', label: translations.header.premierR4 },
        { id: 'subitem2', label: translations.header.premierR6 },
        { id: 'subitem3', label: translations.header.premierR8 }
    ],
    2: [
        { id: 'subitem1', label: translations.header.s32 },
        { id: 'subitem2', label: translations.header.s3232 },
        { id: 'subitem3', label: translations.header.s323227 },
        { id: 'subitem4', label: translations.header.stork }
    ],
    3: [
        { id: 'subitem1', label: translations.header.lttrLive },
        { id: 'subitem2', label: translations.header.lttrAuto },
        { id: 'subitem3', label: translations.header.lttLc }
    ],
    4: [
        { id: 'subitem1', label: translations.header.sbg }
    ]
};

export const newsEventsPressData = [
    {
        id: 1,
        icon: '/icons/news.svg',
        title: translations.newsEventsPress.news.title,
        image: 'https://picsum.photos/1920/1080?random=1',
        heading: translations.newsEventsPress.news.heading,
        dateLocation: translations.newsEventsPress.news.dateLocation,
        text: translations.newsEventsPress.news.text,
    },
    {
        id: 2,
        icon: '/icons/events.svg',
        title: translations.newsEventsPress.events.title,
        image: 'https://picsum.photos/1920/1080?random=2',
        heading: translations.newsEventsPress.events.heading,
        dateLocation: translations.newsEventsPress.events.dateLocation,
        text: translations.newsEventsPress.events.text,
    },
    {
        id: 3,
        icon: '/icons/press-releases.svg',
        title: translations.newsEventsPress.pressReleases.title,
        image: 'https://picsum.photos/1920/1080?random=3',
        heading: translations.newsEventsPress.pressReleases.heading,
        dateLocation: translations.newsEventsPress.pressReleases.dateLocation,
        text: translations.newsEventsPress.pressReleases.text,
    }
]

export const products = [
    {
        id: 1,
        title: translations.products.rLine,
        imageUrl: 'https://picsum.photos/1920/1080?random=1'
    },
    {
        id: 2,
        title: translations.products.sLine,
        imageUrl: 'https://picsum.photos/1920/1080?random=2'
    },
    {
        id: 3,
        title: translations.products.tLine,
        imageUrl: 'https://picsum.photos/1920/1080?random=3'
    }
];

export const footerItems = [
    {
        "id": 1,
        "title": translations.footer.rLine,
        "items": [translations.footer.premierR4, translations.footer.premierR6, translations.footer.premierR8],
        "anchor": 'products'
    },
    {
        "id": 2,
        "title": translations.footer.sLine,
        "items": [translations.footer.s32, translations.footer.s3232, translations.footer.s323227, translations.footer.stork],
        "anchor": 'products'
    },
    {
        "id": 3,
        "title": translations.footer.tLine,
        "items": [translations.footer.lttrLive, translations.footer.lttrAuto, translations.footer.lttLc],
        "anchor": 'products'
    },
    {
        "id": 4,
        "title": translations.footer.solution,
        "items": [translations.footer.sbg],
        "anchor": 'solution'
    },
    {
        "id": 5,
        "title": translations.footer.company,
        "items": [translations.footer.newsEvents, translations.footer.about, translations.footer.contact, translations.footer.careers],
        "anchor": 'newsEventsPress'
    },
]