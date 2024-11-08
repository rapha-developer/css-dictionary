import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const resizeData: PropertyProps = {
    name: "resize",
    definition: "A propriedade resize define se (e como) um elemento pode ser redimensionado pelo usuário.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. O usuário não pode redimensionar o elemento"
        },
        {
            name: "both",
            value: "O usuário pode redimensionar a altura e a largura do elemento"
        },
        {
            name: "horizontal",
            value: "O usuário pode redimensionar a largura do elemento"
        },
        {
            name: "vertical",
            value: "O usuário pode redimensionar a altura do elemento"
        },
        {
            name: "NOTA:",
            value: "A propriedade resize não se aplica a elementos inline ou a elementos block onde overflow='visible'. Então, certifique-se de que overflow esteja definido como 'scroll', 'auto' ou 'hidden'."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "both",
            code: "both"
        },
        {
            name: "vertical",
            code: "vertical"
        },
        {
            name: "horizontal",
            code: "horizontal"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}