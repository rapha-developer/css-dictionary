import { createStartWithEncyclopediaPage } from './encyclopedia/createEncyclopediaPage'
function generateInputData() {
    return {
        id: "ui-head-bar-input-id",
        name: "ui-head-bar-input-name",
        placeholder: 'search properties using [-] between words',
        value: "",
    }
}
function allPropertiesFromEncyclopediaPage() {
    const allProperty = []
    createStartWithEncyclopediaPage.forEach((encyclopediaItem) => {
        const slugFromCategory = encyclopediaItem.slug
        encyclopediaItem.items.forEach((item) => {
            item.collection.forEach((property) => {
                allProperty.push({
                    name: property.name,
                    slug: property.slug,
                    category:slugFromCategory
                });
            })
        })
    });
    return allProperty
}
export {
    generateInputData,
    allPropertiesFromEncyclopediaPage
}