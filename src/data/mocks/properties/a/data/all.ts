import { PropertyProps } from "../../../../../types/PropertyProps";

export const allData: PropertyProps = {
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
        },
        {
            name: 'revert',
            value: 'Especifica o comportamento que depende da origem da folha de estilo à qual pertence a declaração: Leia mais em https://developer.mozilla.org/en-US/docs/Web/CSS/all'
        },
        {
            name: 'revert-layer',
            value: 'Especifica que todas as propriedades do elemento devem reverter a cascata para uma camada de cascata anterior, se houver uma. Leia mais no link abaixo.'
        },
    ],
    examples: [
        {
            name: "initial",
            code: `initial`
        },
        {
            name: "inherit",
            code: `inherit`
        },
        {
            name: "unset",
            code: `unset`
        },
        {
            name: "revert",
            code: `revert`
        },
        {
            name: "revert-layer",
            code: `revert-layer`
        }, 
    ]
}