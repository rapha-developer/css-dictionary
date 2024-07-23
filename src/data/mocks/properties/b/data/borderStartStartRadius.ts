import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderStartStartRadiusData: PropertyProps = {
    name: "border start start radius",
    definition: "A propriedade border-start-start-radius define o raio do canto entre o block-start e o inline-start do elemento. As direções do bloco e inline dependem das propriedades (writing-mode, text-orientation & direction)",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Define a forma do canto no início (block-start) e no final (inline-start) do bloco. O valor padrão é 0. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a forma do canto no início (block-start) e no final (inline-start) do bloco em porcentagem do comprimento do elemento no eixo correspondente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "50px",
            code: "50px"
        },
        {
            name: "50px 10px",
            code: "50px 10px"
        },
        {
            name: "10px 50px",
            code: "10px 50px"
        },
        {
            name: "10%",
            code: "10%"
        },
        {
            name: "50%",
            code: "50%"
        },
        {
            name: "100%",
            code: "100%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}