import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const marginBlockData: PropertyProps = {
    name: "margin block",
    definition: "A propriedade margin-block especifica a margem no início e no fim na direção do bloco e é uma propriedade abreviada para as seguintes propriedades: margin-block-start e margin-block-end. As propriedades CSS margin-block e margin-inline são muito semelhantes às propriedades CSS margin-top, margin-bottom, margin-left e margin-right, mas as propriedades margin-block e margin-inline dependem das direções block e inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Valor padrão do bloco de margem do elemento."
        },
        {
            name: "length",
            value: "Especifica margin-block em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica o bloco de margem em porcentagem em relação ao tamanho do elemento pai na direção inline."
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
            name: "-15px",
            code: "-15px"
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
        {
            name: "120px 10px",
            code: "120px 10px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}