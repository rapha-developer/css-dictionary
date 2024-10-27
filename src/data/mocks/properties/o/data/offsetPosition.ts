import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const offsetPositionData: PropertyProps = {
    name: "offset position",
    definition: "A propriedade offset-position especifica a posição inicial de um elemento ao longo de um caminho. O valor de offset-position determina onde o elemento é colocado inicialmente para se mover ao longo de um caminho de deslocamento se uma função offset-path não especificar sua própria posição inicial",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Define a posição inicial de deslocamento para 50% 50% do bloco que o contém. Este é o padrão."
        },
        {
            name: "auto",
            value: "Define a posição inicial de deslocamento para o canto superior esquerdo da caixa do elemento"
        },
        {
            name: "position",
            value: "Especifica a posição como uma coordenada x/y para colocar um elemento em relação às bordas da caixa. A posição pode ser definida usando de um a quatro valores"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "top left",
            code: "top left"
        },
        {
            name: "top right",
            code: "top right"
        },
        {
            name: "bottom left",
            code: "bottom left"
        },
        {
            name: "bottom right",
            code: "bottom right"
        },
        {
            name: "center left",
            code: "center left"
        },
        {
            name: "center center",
            code: "center center"
        },
        {
            name: "center right",
            code: "center right"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}