import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textEmphasisPositionData: PropertyProps = {
    name: "text emphasis position",
    definition: "A propriedade text-emphasis-position especifica a posição das marcas de ênfase (acima, abaixo, esquerda, direita).",
    category: "css property",
    values: [
        {
            name: "over",
            value: "Os acentos são aplicados sobre o texto (no modo de escrita horizontal)"
        },
        {
            name: "under",
            value: "Os acentos são aplicados abaixo do texto (no modo de escrita horizontal)"
        },
        {
            name: "left",
            value: "Os acentos são aplicados à esquerda do texto (no modo de escrita vertical)"
        },
        {
            name: "right",
            value: "Os acentos são aplicados à direita do texto (no modo de escrita vertical)"
        },
        {
            name: "Dica:",
            value: "Use a propriedade writing-mode para especificar o modo de escrita horizontal ou vertical."
        },
        genericPropertyValuesData.initial
    ],
    examples: [
        {
            name: "over",
            code: "over"
        },
        {
            name: "under",
            code: "under"
        },
        {
            name: "under right",
            code: "under right"
        },
        {
            name: "under left",
            code: "under left"
        },
        genericPropertyExamplesData.initial
    ]
}