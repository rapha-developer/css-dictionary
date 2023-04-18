import { createPropertiesThatStartWithTheLetterA } from './properties/startWithA.js'
import { createPropertiesThatStartWithTheLetterB } from './properties/startWithB.js'
import { createPropertiesThatStartWithTheLetterC } from './properties/startWithC.js'
import { createPropertiesThatStartWithTheLetterD } from './properties/startWithD.js'
import { createPropertiesThatStartWithTheLetterE } from './properties/startWithE.js'

const createCSSPropertyCollection = {
    title: "CSS Properties",
    slug: "css-properties",
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
    createCSSPropertyCollection
}