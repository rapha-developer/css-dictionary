import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const placeSelfData: PropertyProps = {
    name: "place self",
    definition: "A propriedade place-self é usada para alinhar itens de grade individuais e é uma propriedade abreviada para as seguintes propriedades: align-self e justify-self.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão do elemento place-self."
        },
        {
            name: "normal",
            value: "Depende do contexto do layout, mas similar a 'stretch' para layout de grade para itens de grade quando o tamanho não está definido. Se o tamanho estiver definido, o valor da propriedade se comporta como 'start'."
        },
        {
            name: "stretch",
            value: "Estende-se para preencher a célula da grade se o tamanho não estiver definido."
        },
        {
            name: "start",
            value: "Alinhar itens no início nas direções em linha e em bloco"
        },
        {
            name: "end",
            value: "Alinhar itens no final nas direções em linha e em bloco"
        },
        {
            name: "center",
            value: "Alinhar itens ao centro"
        },
        {
            name: "left",
            value: "Alinhar itens à esquerda na direção inline, como o valor da propriedade justify-self"
        },
        {
            name: "right",
            value: "Alinhe os itens à direita na direção inline, como o valor da propriedade justify-self."
        },
        {
            name: "overflow-alignment",
            value: "➊ 'safe' ➤ define o alinhamento do item para 'iniciar' se o conteúdo transbordar; ➋ 'unsafe' ➤ mantém o valor de alinhamento independentemente de o conteúdo do item transbordar ou não"
        },
        {
            name: "baseline alignment",
            value: "O elemento é alinhado com a linha de base do pai."
        },
        {
            name: "Observação:",
            value: "Se place-self tiver dois valores ➤ place-self: start center;  ➊ o valor de align-self é 'start'; ➋ o valor de justify-self é 'center'"
        },
        {
            name: "Observação:",
            value: "Se place-self tiver um valor ➤ place-self: 'end'; ➊ Os valores das propriedades align-self e justify-self são ambos 'end'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "stretch",
            code: "stretch"
        },
        {
            name: "center",
            code: "center"
        },
        {
            name: "center left",
            code: "center left"
        },
        {
            name: "center right",
            code: "center right"
        },
        {
            name: "start",
            code: "start"
        },
        {
            name: "end",
            code: "end"
        },
        {
            name: "center end",
            code: "center end"
        },
        {
            name: "stretch end",
            code: "stretch end"
        },
        {
            name: "end stretch",
            code: "end stretch"
        },
        {
            name: "last baseline",
            code: "last baseline"
        },
        {
            name: "end start",
            code: "end start"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}