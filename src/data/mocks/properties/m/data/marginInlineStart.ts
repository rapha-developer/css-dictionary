import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const marginInlineStartData: PropertyProps = {
    name: "margin inline start",
    definition: "A propriedade margin-inline-start especifica a margem no início na direção inline. As propriedades CSS margin-inline e margin-block são muito semelhantes às propriedades CSS margin-top, margin-bottom, margin-left e margin-right, mas as propriedades margin-inline e margin-block dependem das direções block e inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão margin-inline-start do elemento."
        },
        {
            name: "length",
            value: "Especifica margin-inline-start em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica margin-inline-start em porcentagem relativa ao tamanho do elemento pai na direção inline."
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
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}