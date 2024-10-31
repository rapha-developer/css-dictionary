import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const paddingInlineEndData: PropertyProps = {
    name: "padding inline end",
    definition: "O padding-inline-end de um elemento é o espaço da sua borda até o seu conteúdo, no final da direção inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Distância padrão padding-inline-end do elemento."
        },
        {
            name: "length",
            value: "Especifica a distância em px, pt, cm, etc. Valores negativos não são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica a distância em porcentagem em relação ao tamanho do elemento pai na direção inline."
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