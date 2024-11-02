import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingTopData: PropertyProps = {
    name: "padding top",
    definition: "A propriedade padding-top define o preenchimento superior (espaço) de um elemento.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Especifica um preenchimento superior fixo em px, pt, cm, etc. O valor padrão é 0. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica um preenchimento superior em porcentagem da largura do elemento que o contém."
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
            name: "25px",
            code: "25px"
        },
        {
            name: "50px",
            code: "50px"
        },
        {
            name: "1%",
            code: "1%"
        },
        {
            name: "5%",
            code: "5%"
        },
        {
            name: "10%",
            code: "10%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}