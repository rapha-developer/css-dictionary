import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const scrollbarColorData: PropertyProps = {
    name: "scrollbar color",
    definition: "A propriedade scrollbar-color especifica a cor da trilha da barra de rolagem (plano de fundo) e do polegar (o rolador).",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "O navegador define as cores da barra de rolagem. Este é o padrão"
        },
        {
            name: "color color",
            value: "A primeira cor define a cor do polegar da barra de rolagem e a segunda cor define a cor do trilho da barra de rolagem"
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "pink lightblue",
            code: "pink lightblue"
        },
        {
            name: "pink green",
            code: "pink green"
        },
        {
            name: "red lightblue",
            code: "red lightblue"
        },
        genericPropertyExamplesData.initial,
    ]
}