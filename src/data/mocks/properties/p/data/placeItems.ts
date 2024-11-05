import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const placeItemsData: PropertyProps = {
    name: "place items",
    definition: "Especifica os valores das propriedades align-items e justify-items para layouts de grade. A propriedade place-items é usada no layout de grade e é uma propriedade abreviada para as seguintes propriedades: align-items & justify-items.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Padrão. O valor padrão de place-items do elemento. O valor padrão para align-items é 'normal', e o valor padrão para justify-items é 'legacy'."
        },
        {
            name: "baseline",
            value: "Os itens são posicionados na linha de base do contêiner"
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
            value: "Alinhar itens ao centro da célula da grade"
        },
        {
            name: "stretch",
            value: "Estende os itens da grade para preencher o contêiner da grade se os tamanhos dos itens da grade não estiverem definidos."
        },
        {
            name: "Observação:",
            value: "Se place-items tiver dois valores ➤ place-items: start center;  ➊ o valor de align-items é 'start'; ➋ o valor de justify-items é 'center'"
        },
        {
            name: "Observação:",
            value: "Se place-items tiver um valor ➤ place-items: 'end'; ➊ Os valores das propriedades align-items e justify-items são ambos 'end'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal legacy",
            code: "normal legacy"
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
            name: "baseline",
            code: "baseline"
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
            name: "baseline",
            code: "baseline"
        },
        {
            name: "end start",
            code: "end start"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}