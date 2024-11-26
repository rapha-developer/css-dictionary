import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const translateData: PropertyProps = {
    name: "translate",
    definition: "A propriedade translate permite que você altere a posição dos elementos. A propriedade translate define as coordenadas x e y de um elemento em 2D. Você também pode definir a coordenada z para alterar a posição em 3D. As coordenadas podem ser fornecidas apenas como coordenadas x, coordenadas x e y, ou coordenadas x, y e z.",
    category: "css property",
    values: [
        {
            name: "x-axis",
            value: "Define a posição no eixo x. Valores possíveis: comprimento (length) e %."
        },
        {
            name: "y-axis",
            value: "Define a posição no eixo y. Valores possíveis: comprimento (length) e %."
        },
        {
            name: "z-axis",
            value: "Define a posição no eixo z. Valores possíveis: comprimento (length)."
        },
        {
            name: "DICA: ",
            value: "Você precisa definir um valor para a propriedade de perspectiva CSS para que a propriedade z tenha efeito."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "0 0 0",
            code: "0 0 0"
        },
        {
            name: "50px 0",
            code: "50px 0"
        },
        {
            name: "0 50px",
            code: "0 50px"
        },
        {
            name: "0 0 50px",
            code: "0 0 50px"
        },
        {
            name: "Exemplo 2",
            code: "-50px 20px 0"
        },
        {
            name: "Exemplo 1",
            code: "20px 20px -150px"
        },
        genericPropertyExamplesData.initial,
    ]
}