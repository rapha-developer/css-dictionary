import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const placeContentData: PropertyProps = {
    name: "place content",
    definition: "A propriedade place-content é usada em layouts de flexbox e grade e é uma propriedade abreviada para as seguintes propriedades: align-content & justify-content.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Valor padrão. Depende do contexto do layout. O mesmo que não definir nenhum valor de propriedade para align-content e justify-content."
        },
        {
            name: "stretch",
            value: "Grid (grade): estica os itens da grade para preencher o contêiner da grade se o tamanho não estiver definido."
        },
        {
            name: "Flexbox",
            value: "Estende itens flexíveis no eixo transversal para preencher o contêiner flexível se os itens flexíveis não tiverem um tamanho especificado no eixo transversal."
        },
        {
            name: "start",
            value: "Alinhar itens no início do contêiner"
        },
        {
            name: "end",
            value: "Alinhar itens no final do contêiner"
        },
        {
            name: "center",
            value: "Alinhar itens ao centro do contêiner"
        },
        {
            name: "space-between",
            value: "Distribua o espaço extra disponível uniformemente entre os elementos dentro do contêiner em ambos os eixos."
        },
        {
            name: "space-around",
            value: "Distribua os elementos dentro do contêiner uniformemente em ambos os eixos."
        },
        {
            name: "overflow-alignment",
            value: " ➊ 'safe' define o alinhamento do item para 'start' se o conteúdo transbordar; ➋ 'unsafe' mantém o valor de alinhamento independentemente de o conteúdo do item transbordar ou não"
        },
        {
            name: "Observação:",
            value: "Se place-content tiver dois valores ➤ place-content: start center;  ➊ o valor de align-content é 'start'; ➋ o valor de justify-content é 'center'"
        },
        {
            name: "Observação:",
            value: "Se place-content tiver um valor ➤ place-content: 'end'; ➊ Os valores das propriedadas align-content e justify-content são ambos 'end'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "stretch",
            code: "stretch"
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
            name: "center",
            code: "center"
        },
        {
            name: "space-between",
            code: "space-between"
        },
        {
            name: "space-around",
            code: "space-around"
        },
        {
            name: "space-evenly",
            code: "space-evenly"
        },
        {
            name: "end start",
            code: "end start"
        },
        {
            name: "space-between start",
            code: "space-between start"
        },
        {
            name: "space-around end",
            code: "space-around end"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}