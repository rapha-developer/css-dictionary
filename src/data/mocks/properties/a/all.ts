import { PropertyProps } from "../../../../types/PropertyProps";


export const all: PropertyProps = {
    name: "all",
    definition: "A propriedade all redefine todas as propriedades, exceto unicode-bidi e direção, para seus valores iniciais ou herdados.",
    category: "css property",
    values: [
        {
            name: 'initial',
            value: 'Altera todas as propriedades aplicadas ao elemento ou ao elemento pai para seu valor inicial'
        },
        {
            name: 'inherit',
            value: 'Altera todas as propriedades aplicadas ao elemento ou ao elemento pai para seu valor pai'
        },
        {
            name: 'unset',
            value: 'Altera todas as propriedades aplicadas ao elemento ou ao elemento pai para seu valor pai se forem herdáveis ​​ou para seu valor inicial se não forem'
        }
    ],
    examples: [
        {
            name: "initial",
            code: `<p class="font-outfit text-lg text-secondary bg-yellow-200 allExample1">Fist example</p>
            <style>
                .allExample1 {
                    all: initial
                }
            </style>
            `
        },
        {
            name: "inherit",
            code: `<p class="font-outfit text-lg text-secondary bg-yellow-200 allExample2">Fist example</p>
            <style>
                .allExample2 {
                    all: inherit;
                }
            </style>
            `
        },
        {
            name: "unset",
            code: `<p class="font-outfit text-lg text-secondary bg-yellow-200 allExample3">Fist example</p>
            <style>
                .allExample3 {
                    all: unset;
                }
            </style>
            `
        }, 
    ]
}