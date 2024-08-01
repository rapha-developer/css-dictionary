import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const boxReflectData: PropertyProps = {
    name: "box reflect",
    definition: "A propriedade box-reflect é usada para criar um reflexo de um elemento.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Nenhum reflexo é exibido."
        },
        {
            name: "below",
            value: "Cria um reflexo abaixo do elemento."
        },
        {
            name: "above",
            value: "Cria um reflexo acima do elemento."
        },
        {
            name: "left",
            value: "Cria um reflexo à esquerda do elemento."
        },
        {
            name: "right",
            value: "Cria um reflexo à direita do elemento."
        },
        {
            name: "position offset",
            value: "- posição define o reflexo abaixo, acima, à esquerda ou à direita do elemento. - offset define a distância até o reflexo. A distância é definida em px, pt, cm, etc. O valor padrão é 0."
        },
        {
            name: "position offset gradient",
            value: "- position define o reflexo abaixo, acima, à esquerda ou à direita do elemento. - offset define a distância até o reflexo. A distância é definida em px, pt, cm, etc. O valor padrão é 0. - gradient define uma transição para o reflexo, ou seja, um efeito de esmaecimento."
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
            name: "below",
            code: "below"
        },
        {
            name: "above",
            code: "above"
        },
        {
            name: "left",
            code: "left"
        },
        {
            name: "right",
            code: "right"
        },
        {
            name: "right 50px",
            code: "right 50px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}