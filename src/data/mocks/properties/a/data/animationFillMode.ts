import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationFillModeData: PropertyProps = {
    name: "animation fill mode",
    definition: "Especifica um estilo para o elemento quando a animação não está sendo reproduzida (antes de começar, depois de terminar ou ambos)",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. A animação não aplicará nenhum estilo ao elemento antes ou depois de ser executada"
        },
        {
            name: "forwards",
            value: "O elemento manterá os valores de estilo definidos pelo último quadro-chave (depende da direção da animação e da contagem de iterações da animação)"
        },
        {
            name: "backwards",
            value: "O elemento obterá os valores de estilo definidos pelo primeiro quadro-chave (depende da direção da animação) e os manterá durante o período de atraso da animação"
        },
        {
            name: "both",
            value: "A animação seguirá as regras tanto para frente quanto para trás, estendendo as propriedades da animação em ambas as direções"
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
            name: "forwards",
            code: "forwards"
        },
        {
            name: "backwards",
            code: "backwards"
        },
        {
            name: "both",
            code: "both"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}