import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingInlineData: PropertyProps = {
    name: "padding inline",
    definition: "O padding-inline de um elemento é o espaço da sua borda até o seu conteúdo na direção inline, e é uma propriedade abreviada para as seguintes propriedades: padding-inline-start & padding-inline-end. As propriedades CSS relacionadas writing-mode e direction definem a direção inline. Isso afeta onde o início e o fim de um elemento estão na direção inline e o resultado da propriedade padding-inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Distância padding-inline padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica a distância em px, pt, cm, etc. Valores negativos não são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica a distância em porcentagem em relação ao tamanho do elemento pai na direção inline."
        },
        {
            name: "Observação:",
            value: "Se houver dois valores ➤ padding-inline: 10px 50px;  ➊ padding no início é 10px; ➋ padding no final é 50px"
        },
        {
            name: "Observação:",
            value: "Se houver um valor ➤ padding-inline: 10px; ➊ padding no início e no fim é 10px"
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
            name: "Exemplo 1",
            code: "25px 15px"
        },
        {
            name: "Exemplo 2",
            code: "10% 10%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}