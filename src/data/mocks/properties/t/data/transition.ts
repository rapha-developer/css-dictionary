import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transitionData: PropertyProps = {
    name: "transition",
    definition: "As transições permitem que você defina a transição entre dois estados de um elemento. A propriedade de transição é uma propriedade abreviada para: transition-property, transition-duration, transition-timing-function e transition-delay. Sempre especifique a propriedade transition-duration, caso contrário a duração será 0s e a transição não terá efeito.",
    category: "css property",
    values: [
        {
            name: "transition-property",
            value: "Especifica o nome da propriedade CSS para a qual o efeito de transição é"
        },
        {
            name: "transition-duration",
            value: "Especifica quantos segundos ou milissegundos o efeito de transição leva para ser concluído"
        },
        {
            name: "transition-timing-function",
            value: "Especifica a curva de velocidade do efeito de transição"
        },
        {
            name: "transition-delay",
            value: "Define quando o efeito de transição começará"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "Example 1",
            code: "all 1s ease-out"
        },
        {
            name: "Example 2",
            code: "all 700ms ease-in-out"
        },
        {
            name: "Example 3",
            code: "all 1.5s linear"
        },
        {
            name: "Example 4",
            code: "all 1s ease-in-out"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}