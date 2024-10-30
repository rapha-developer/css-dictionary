import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingBlockStartData: PropertyProps = {
    name: "padding block start",
    definition: "O padding-block-start de um elemento é o espaço da sua borda até o seu conteúdo, no início da direção do bloco.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Valor padding-block-start padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica padding-block-start em px, pt, cm, etc. Valores negativos não são permitidos. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Especifica o padding-block-start em porcentagem relativa ao tamanho do elemento pai na direção inline."
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