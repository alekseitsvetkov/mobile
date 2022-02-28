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
