import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingBlockEndData: PropertyProps = {
    name: "padding block end",
    definition: "O padding-block-end de um elemento é o espaço da sua borda até o seu conteúdo, no final da direção do bloco.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Valor padding-block-end padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica padding-block-end em px, pt, cm, etc. Valores negativos não são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica padding-block-end em porcentagem relativa ao tamanho do elemento pai na direção inline."
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