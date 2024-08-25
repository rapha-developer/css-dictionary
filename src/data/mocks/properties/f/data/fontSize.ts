import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontSizeData: PropertyProps = {
    name: "font size",
    definition: "A propriedade font-size define o tamanho de uma fonte.",
    category: "css property",
    values: [
        {
            name: "medium",
            value: "Define o font-size para um tamanho médio. Este é o padrão"
        },
        {
            name: "xx-small",
            value: "Define o font-size para um tamanho xx-small"
        },
        {
            name: "x-small",
            value: "Define o font-size para um tamanho extra pequeno"
        },
        {
            name: "small",
            value: "Define o font-size para um tamanho pequeno"
        },
        {
            name: "large",
            value: "Define o font-size para um tamanho grande"
        },
        {
            name: "x-large",
            value: "Define o font-size para um tamanho extra grande"
        },
        {
            name: "xx-large",
            value: "Define o font-size para um tamanho xx-large"
        },
        {
            name: "smaller",
            value: "Define o font-size para um tamanho menor que o elemento pai"
        },
        {
            name: "larger",
            value: "Define o font-size para um tamanho maior que o elemento pai"
        },
        {
            name: "length",
            value: "Define o font-size para um tamanho fixo em px, cm, etc. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Define o font-size para uma porcentagem do tamanho da fonte do elemento pai"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "medium",
            code: "medium"
        },
        {
            name: "xx-small",
            code: "xx-small"
        },
        {
            name: "small",
            code: "small"
        },
        {
            name: "large",
            code: "large"
        },
        {
            name: "20px",
            code: "20px"
        },
        {
            name: "30%",
            code: "30%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}