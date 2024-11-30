import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const writingModeData: PropertyProps = {
    name: "writing mode",
    definition: "A propriedade writing-mode especifica se as linhas de texto são dispostas horizontalmente ou verticalmente.",
    category: "css property",
    values: [
        {
            name: "horizontal-tb",
            value: "Deixe o conteúdo fluir horizontalmente da esquerda para a direita e verticalmente de cima para baixo."
        },
        {
            name: "vertical-rl",
            value: "Deixe o conteúdo fluir verticalmente de cima para baixo, horizontalmente da direita para a esquerda."
        },
        {
            name: "vertical-lr",
            value: "Deixe o conteúdo fluir verticalmente de cima para baixo, horizontalmente da esquerda para a direita."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "horizontal-tb",
            code: "horizontal-tb"
        },
        {
            name: "vertical-rl",
            code: "vertical-rl"
        },
        {
            name: "vertical-lr",
            code: "vertical-lr"
        },
        genericPropertyExamplesData.initial,
    ]
}