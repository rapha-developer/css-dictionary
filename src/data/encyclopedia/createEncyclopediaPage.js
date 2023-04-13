import { createPropertiesThatStartWithTheLetterA } from './startWithA.js'
import { createPropertiesThatStartWithTheLetterB } from './startWithB.js'
import { createPropertiesThatStartWithTheLetterC } from './startWithC.js'
import { createPropertiesThatStartWithTheLetterD } from './startWithD.js'
import { createPropertiesThatStartWithTheLetterE } from './startWithE.js'
const createStartWithEncyclopediaPage = {
    title: "CSS Properties",
    items: [
        {
            title: "Começando com A",
            collection: createPropertiesThatStartWithTheLetterA
        },
        {
            title: "Começando com B",
            collection: createPropertiesThatStartWithTheLetterB
        },
        {
            title: "Começando com C",
            collection: createPropertiesThatStartWithTheLetterC
        },
        {
            title: "Começando com D",
            collection: createPropertiesThatStartWithTheLetterD
        },
        {
            title: "Começando com E",
            collection: createPropertiesThatStartWithTheLetterE
        },
    ]
}
export {
    createStartWithEncyclopediaPage
}