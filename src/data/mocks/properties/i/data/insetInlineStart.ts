import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const insetInlineStartData: PropertyProps = {
    name: "inset inline start",
    definition: "A propriedade inset-inline-start define a distância entre o início de um elemento e o elemento pai na direção inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Define a distância padrão do elemento inset-inline"
        },
        {
            name: "length",
            value: "Especifica a distância em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica a distância em porcentagem em relação ao tamanho do elemento pai no eixo correspondente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0",
            code: "0"
        },
        {
            name: "10px",
            code: "10px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}