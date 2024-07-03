import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationNameData: PropertyProps = {
    name: "animation name",
    definition: "Especifica um nome para a animação @keyframes",
    category: "css property",
    values: [
        {
            name: "keyframe name",
            value: "Especifica o nome do quadro-chave que você deseja vincular ao seletor"
        },
        {
            name: "none",
            value: "Valor padrão. Especifica que não haverá animação (pode ser usado para substituir animações provenientes da cascata)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit

    ],
    examples: [
        {
            name: "bounce",
            code: "bounce"
        },
        {
            name: "ping",
            code: "ping"
        },
        {
            name: "none",
            code: "none"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}