import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textAlignLastData: PropertyProps = {
    name: "text align last",
    definition: "A propriedade text-align-last especifica como alinhar a última linha de um texto.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. A última linha é justificada e alinhada à esquerda"
        },
        {
            name: "left",
            value: "A última linha é alinhada à esquerda"
        },
        {
            name: "right",
            value: "A última linha é alinhada à direita"
        },
        {
            name: "center",
            value: "A última linha é centralizada"
        },
        {
            name: "justify",
            value: "A última linha é justificada como o resto das linhas"
        },
        {
            name: "start",
            value: "A última linha é alinhada no início da linha (esquerda se a direção do texto for da esquerda para a direita e direita se a direção do texto for da direita para a esquerda)"
        },
        {
            name: "end",
            value: "A última linha é alinhada no final da linha (direita se a direção do texto for da esquerda para a direita, e esquerda se a direção do texto for da direita para a esquerda)"
        },
        {
            name: "Observação:",
            value: "Observe que a propriedade text-align-last define o alinhamento para todas as últimas linhas dentro do elemento selecionado. Então, se você tiver um <div> com três parágrafos, text-align-last será aplicado à última linha de CADA um dos parágrafos. Para usar text-align-last somente no último parágrafo no contêiner, você pode usar :last child"
        },
        {
            name: "DICA:",
            value: "No Edge anterior à versão 79, a propriedade text-align-last só funciona em textos que têm 'text-align: justify'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "left",
            code: "left"
        },
        {
            name: "right",
            code: "right"
        },
        {
            name: "center",
            code: "center"
        },
        {
            name: "justify",
            code: "justify"
        },
        {
            name: "start",
            code: "start"
        },
        {
            name: "end",
            code: "end"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}