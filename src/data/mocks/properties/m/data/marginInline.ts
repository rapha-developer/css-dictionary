import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const marginInlineData: PropertyProps = {
    name: "margin inline",
    definition: "A propriedade margin-inline especifica a margem no início e no fim na direção inline e é uma propriedade abreviada para as seguintes propriedades: margin-inline-start & margin-inline-end. As propriedades CSS margin-inline e margin-block são muito semelhantes às propriedades CSS margin-top, margin-bottom, margin-left e margin-right, mas as propriedades margin-inline e margin-block dependem das direções block e inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Valor margin-inline padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica margin-inline em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica a margem embutida em porcentagem relativa ao tamanho do elemento pai na direção embutida."
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
            name: "-25px",
            code: "-25px"
        },
        {
            name: "50px",
            code: "50px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "5%",
            code: "5%"
        },
        {
            name: "10px 50px",
            code: "10px 50px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}