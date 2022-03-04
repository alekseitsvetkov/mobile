import {SCREEN_HEIGHT} from '_app/utils/dimensions';
import {ISlide} from '_app/components/MainCarousel/types';

// TODO: REMOVE THIS MOCK WHEN DONE ON BACKEND
export const MOCK_CAROUSEL_DATA: ISlide[] = [
    {
        id: '1',
        title: 'New York City',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: `https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${SCREEN_HEIGHT}&q=80`,
    },
    {
        id: '2',
        title: 'Paris',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: `https://images.unsplash.com/photo-1545721264-afab304e89d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${SCREEN_HEIGHT}&q=80`,
    },
    {
        id: '3',
        title: 'London',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${SCREEN_HEIGHT}&q=80`,
    },
];

const MOCK_IMAGE =
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

const NATURE_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

const SKIING_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

const SURFING_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const HIKING_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

const VOLCANO_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1580250642511-1660fe42ad58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

const DESERT_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

const STAR_MOCK_IMAGE =
    'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

export const MOCK_CATEGORIES_DATA = [
    {id: '13', emoji: '🌳', title: 'Nature', imageUri: NATURE_MOCK_IMAGE},
    {id: '4', emoji: '⛰️', title: 'Mountains', imageUri: MOCK_IMAGE},
    {id: '6', emoji: '🏄🏻‍♂️', title: 'Surfing', imageUri: SURFING_MOCK_IMAGE},
    {id: '5', emoji: '🌋', title: 'Volcano', imageUri: VOLCANO_MOCK_IMAGE},
    {id: '16', emoji: '🔭', title: 'Star Gazing', imageUri: STAR_MOCK_IMAGE},
    {id: '1', emoji: '🥾', title: 'Hiking', imageUri: HIKING_MOCK_IMAGE},
    //{id: '15', emoji: '🧗🏼‍♂️', title: 'Rock climbing', imageUri: MOCK_IMAGE}
    //{id: '2', emoji: '🛶', title: 'Kayaking', imageUri: MOCK_IMAGE},
    //{id: '6', emoji: '🏄🏻‍♂️', title: 'Surfing', imageUri: MOCK_IMAGE},
    // {id: '7', emoji: '🐦', title: 'Birding', imageUri: MOCK_IMAGE},
    // {id: '8', emoji: '🌊', title: 'Sea', imageUri: MOCK_IMAGE},
    // {id: '9', emoji: '⛷️', title: 'Skiing', imageUri: MOCK_IMAGE},
    //{id: '10', emoji: '🏌️', title: 'Golf', imageUri: MOCK_IMAGE},
    {id: '11', emoji: '🏜️', title: 'Desert', imageUri: DESERT_MOCK_IMAGE},
    //{id: '12', emoji: '⛵', title: 'Sail', imageUri: MOCK_IMAGE},
    //{id: '14', emoji: '🎣', title: 'Fishing', imageUri: MOCK_IMAGE},
    //{id: '3', emoji: '🎈', title: 'Ballooning', imageUri: MOCK_IMAGE},
    {id: '9', emoji: '⛷️', title: 'Skiing', imageUri: SKIING_MOCK_IMAGE},
];
