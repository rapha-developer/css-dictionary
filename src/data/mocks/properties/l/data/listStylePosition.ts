import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const listStylePositionData: PropertyProps = {
    name: "list style position",
    definition: "A propriedade list-style-position especifica a posição dos marcadores de itens da lista (marcadores - bullet points).",
    category: "css property",
    values: [
        {
            name: "inside",
            value: "Os marcadores (bullet points) estarão dentro do item da lista. Como faz parte do item da lista, fará parte do texto e empurrará o texto para o início"
        },
        {
            name: "outside",
            value: "Os marcadores (bullet points) ficarão fora do item da lista. Este é o padrão. O início de cada linha de um item da lista será alinhado verticalmente"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "inside",
            code: "inside"
        },
        {
            name: "outside",
            code: "outside"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}