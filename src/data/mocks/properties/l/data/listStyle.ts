import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const listStyleData: PropertyProps = {
    name: "list style",
    definition: "A propriedade list-style é uma abreviação para as seguintes propriedades:list-style-type, list-style-position & list-style-image. Se um dos valores estiver faltando, o valor padrão dessa propriedade será usado.",
    category: "css property",
    values: [
        {
            name: "list-style-type",
            value: "Especifica o tipo de marcador de item de lista. O valor padrão é 'disc'"
        },
        {
            name: "list-style-position",
            value: "Especifica onde colocar o marcador de item de lista. O valor padrão é 'outside'"
        },
        {
            name: "list-style-image",
            value: "Especifica o tipo de marcador de item de lista. O valor padrão é 'nenhum'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "disc inside",
            code: "disc inside"
        },
        {
            name: "disc outside",
            code: "disc outside"
        },
        {
            name: "circle inside",
            code: "circle inside"
        },
        {
            name: "circle outside",
            code: "circle outside"
        },
        {
            name: "square inside",
            code: "square inside"
        },
        {
            name: "upper-roman inside",
            code: "upper-roman inside"
        },
        {
            name: "lower-alpha inside",
            code: "lower-alpha inside"
        },
        {
            name: "url(1)",
            code: "disc inside url('https://www.w3schools.com/cssref/sqpurple.gif')"
        },
        {
            name: "url(2)",
            code: "disc inside url('https://www.w3schools.com/cssref/smiley.gif')"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}