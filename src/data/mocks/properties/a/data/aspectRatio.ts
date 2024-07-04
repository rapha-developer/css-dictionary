import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const aspectRatioData: PropertyProps = {
    name: "aspect ratio",
    definition: "Especifica a proporção preferida de um elemento. Use a propriedade de proporção de aspecto em layouts responsivos onde os elementos geralmente variam em tamanho e você deseja preservar a proporção entre largura e altura.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "O primeiro número especifica o número da largura na proporção."
        },
        {
            name: "number",
            value: "O segundo número especifica o número da altura na proporção. Opcional. Se não for definido, o número da altura será 1 como padrão."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "1/1",
            code: "1/1"
        },
        {
            name: "1/2",
            code: "1/2"
        },
        {
            name: "3/2",
            code: "3/2"
        },
        {
            name: "3/4",
            code: "3/4"
        },
        {
            name: "5/2",
            code: "5/2"
        },
        {
            name: "16/9",
            code: "16/9"
        },
        {
            name: "0.5",
            code: "0.5"
        },
        {
            name: "2",
            code: "2"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ],
}