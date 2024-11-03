import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const perspectiveOriginData: PropertyProps = {
    name: "perspective origin",
    definition: "A propriedade perspective-origin define de qual posição o usuário está olhando para o elemento posicionado em 3D. Ao definir a propriedade perspective-origin para um elemento, são os elementos CHILD que obterão o efeito, NÃO o elemento em si.",
    category: "css property",
    values: [
        {
            name: "x-axis",
            value: "Definindo onde a visualização é colocada no eixo x. Valores possíveis: top, center, bottom, length e %. Valor padrão: 50%"
        },
        {
            name: "y-axis",
            value: "Definindo onde a visualização é colocada no eixo y. Valores possíveis: top, center, bottom, length e %. Valor padrão: 50%"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "center top",
            code: "center top"
        },
        {
            name: "center center",
            code: "center center"
        },
        {
            name: "center bottom",
            code: "center bottom"
        },
        {
            name: "right bottom",
            code: "right bottom"
        },
        {
            name: "left bottom",
            code: "left bottom"
        },
        {
            name: "20% bottom",
            code: "20% bottom"
        },
        {
            name: "30% top",
            code: "30% top"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}