import { WidgetElement } from "../types/widgetElement";

export const iconTypeLabels = {
    square: "square",
    book: "book",
    academic: "academic",
    foundation: "foundation",
    news: "newspaper",
}

export const WidgetListData: WidgetElement[] =  [
    {
        heading: 'css properties',
        description: '3 properties',
        iconColor: 'purple',
        iconType: iconTypeLabels.square,
        url: "#"
    },
    {
        heading: 'css selectors',
        description: '2 properties',
        iconColor: 'red',
        iconType: iconTypeLabels.book,
        url: "#"
    },
    {
        heading: 'css functions',
        description: '2 properties',
        iconColor: 'pink',
        iconType: iconTypeLabels.academic,
        url: "#"
    },
    {
        heading: 'css glossary',
        description: '4 topics',
        iconColor: 'emerald',
        iconType: iconTypeLabels.foundation,
        url: "#"
    },
    {
        heading: 'css newsletter',
        description: '4 news',
        iconColor: 'gold',
        iconType: iconTypeLabels.news,
        url: "#"
    } 
];
