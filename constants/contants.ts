import { Dimensions } from "react-native";

export const StorageKey = {
    ACCESS_TOKEN: "ACCESS_TOKEN",
    UN_FIRST_OPEN: "UN_FIRST_OPEN",
};

export const { width, height } = Dimensions.get('window')


export const dataCategoriesButton = [
    {
        title: 'All',
        iconName: 'hiking',
    },
    {
        title: 'Beaches',
        iconName: 'beach',
    },
    {
        title: 'Mountains',
        iconName: 'terrain',
    },
    {
        title: 'Cities',
        iconName: 'city',
    },
    {
        title: 'Forests',
        iconName: 'tree',
    },
    {
        title: 'Lakes',
        iconName: 'swim',
    }, {
        title: 'Historical Sites',
        iconName: 'castle',
    },
    {
        title: 'National Parks',
        iconName: 'pine-tree',
    },
    {
        title: 'Islands',
        iconName: 'island',
    },
    {
        title: 'Deserts',
        iconName: 'weather-sunny',
    }
]