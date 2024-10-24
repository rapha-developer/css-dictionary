import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const outlineData: PropertyProps = {
    name: "outline",
    definition: "Um contorno (outline) é uma linha desenhada ao redor dos elementos, fora das bordas, para fazer o elemento 'se destacar'. A propriedade outline é uma propriedade abreviada para: outline-width, outline-style (obrigatório) & outline-color. Se outline-color for omitido, a cor aplicada será a cor do textos",
    category: "css property",
    values: [
        {
            name: "outline-width",
            value: "Especifica a largura do contorno"
        },
        {
            name: "outline-style",
            value: "Especifica o estilo do contorno"
        },
        {
            name: "outline-color",
            value: "Especifica a cor do contorno"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "exemplo 1",
            code: "1px dotted green"
        },
        {
            name: "exemplo 2",
            code: "5px dotted green"
        },

        {
            name: "exemplo 3",
            code: "5px solid green"
        },
        {
            name: "exemplo 4",
            code: "5px solid red"
        },
        {
            name: "exemplo 5",
            code: "5px dashed red"
        },
        {
            name: "exemplo 6",
            code: "5px inset red"
        },
        {
            name: "exemplo 7",
            code: "5px outset red"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}