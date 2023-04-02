const createSidebarGroupData = {
    title: 'pages',
    items: [
        {
            url: "#",
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
            url: "#",
            name: "design",
            icon: "blue"
        },
        {
            url: "#",
            name: "development",
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
export {
    createSidebarGroupData,
    createFirstAccordionData,
    createSecondAccordionData
}