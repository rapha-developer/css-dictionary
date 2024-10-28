import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingData: PropertyProps = {
    name: "padding",
    definition: "O preenchimento de um elemento é o espaço entre seu conteúdo e sua borda. A propriedade padding é uma propriedade abreviada para: padding-top, padding-right, padding-bottom e padding-left. Observação: o padding cria espaço extra dentro de um elemento, enquanto a margem cria espaço extra ao redor de um elemento.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Especifica o preenchimento (padding) em px, pt, cm, etc. O valor padrão é 0. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica o preenchimento (padding) em porcentagem da largura do elemento que o contém"
        },
        {
            name: "Observação:",
            value: "Se houver quatro valores ➤ padding: 10px 5px 15px 20px;  ➊ padding-top: 10px; ➋ padding-right: 5px; ➌ padding-bottom: 15px; ➍ padding-left: 20px;"
        },
        {
            name: "Observação:",
            value: "Se houver três valores ➤ padding: 10px 5px 15px;  ➊ padding-top: 10px; ➋ padding-right & padding-left: 5px; ➌ padding-bottom: 15px;"
        },
        {
            name: "Observação:",
            value: "Se houver dois valores ➤ padding: 10px 5px;  ➊ padding-top & padding-bottom: 10px; ➋ padding-right & padding-left: 5px;"
        },
        {
            name: "Observação:",
            value: "Se houver um valor ➤ padding: 10px; ➊ padding-top, padding-bottom, padding-right & padding-left recebem o valor de 10px;"
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
            code: "10px 1px 15px 50px"
        },
        {
            name: "Exemplo 2",
            code: "10px 1px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}