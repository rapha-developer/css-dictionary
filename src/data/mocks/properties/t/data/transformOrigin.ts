import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transformOriginData: PropertyProps = {
    name: "transform origin",
    definition: "A propriedade transform-origin permite que você altere a posição dos elementos transformados. Transformações 2D podem alterar os eixos x e y de um elemento. Transformações 3D também podem alterar o eixo z de um elemento.",
    category: "css property",
    values: [
        {
            name: "x-axis",
            value: "Define onde a visualização é colocada no eixo x. Valores possíveis:left, center, right, length e %."
        },
        {
            name: "y-axis",
            value: "Define onde a visualização é colocada no eixo y. Valores possíveis: top, center, bottom, length e %."
        },
        {
            name: "z-axis",
            value: "Define onde a visualização é colocada no eixo z (para transformações 3D). Valores possíveis: length."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "center x2",
            code: "center center"
        },
        {
            name: "center top",
            code: "center top"
        },
        {
            name: "center bottom",
            code: "center bottom"
        },
        {
            name: "right top",
            code: "right top"
        },
        {
            name: "left top",
            code: "left top"
        },
        {
            name: "10% bottom",
            code: "10% bottom"
        },
        {
            name: "30% bottom",
            code: "30% bottom"
        },
        genericPropertyExamplesData.initial,
    ]
}