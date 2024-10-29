import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingBlockData: PropertyProps = {
    name: "padding block",
    definition: "O bloco de preenchimento de um elemento é o espaço de sua borda até seu conteúdo na direção do bloco (block direction) e é uma propriedade abreviada para as seguintes propriedades: padding-block-start e padding-block-end.",
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
            value: "Se houver dois valores ➤ padding-block: 10px 50px;  ➊ padding no início é 10px; ➋ padding no final é 50px"
        },
        {
            name: "Observação:",
            value: "Se houver um valor ➤ padding-block: 10px; ➊ padding no início e no fim é 10px"
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
            code: "15% 15%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}