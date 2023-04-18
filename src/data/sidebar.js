const createSidebarGroupData = {
    title: 'pages',
    items: [
        {
            url: "/",
            name: "recent materials",
            icon: "clock"
        },
        {
            url: "#",
            name: "favorites",
            icon: "heart"
        }
    ]
}
const createFirstAccordionData = {
    title: "categories",
    format: "capitalize",
    type: "links",
    items: [
        {
            url: "/ref/css-properties",
            name: "CSS Property",
            icon: "blue"
        },
        {
            url: "/ref/css-functions",
            name: "CSS Functions",
            icon: "green"
        },
        {
            url: "#",
            name: "music",
            icon: "orange"
        },
        {
            url: "#",
            name: "video",
            icon: "red"
        },
    ]
}
const createSecondAccordionData = {
    title: "my tags",
    format: "lowercase",
    type: "tags",
    items: [
        {
            url: "#",
            name: "#unisense",
            icon: "gray"
        },
        {
            url: "#",
            name: "#development",
            icon: "gray"
        },
    ]
}
const createItemsDataToSingleItem = [
    {
        name: "archive",
        url: "#",
        type: "archive"
    },
    {
        name: "knowledge",
        url: "#",
        type: "know"
    },
    {
        name: "contact",
        url: "#",
        type: "contact"
    },
]
const createOrdinalItems = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4
}
export {
    createSidebarGroupData,
    createFirstAccordionData,
    createSecondAccordionData,
    createItemsDataToSingleItem,
    createOrdinalItems
}