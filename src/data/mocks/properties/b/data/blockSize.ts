import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const blockSizeData: PropertyProps = {
    name: "block size",
    definition: "A propriedade block-size especifica o tamanho de um elemento na direção do bloco.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão do tamanho do bloco do elemento."
        },
        {
            name: "length",
            value: "Especifica o tamanho do bloco em px, pt, cm, etc. Leia sobre unidades de tamanho no glossário."
        },
        {
            name: "%",
            value: "Especifica o tamanho do bloco em porcentagem em relação ao tamanho do elemento pai no eixo correspondente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "10px",
            code: "10px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "80%",
            code: "80%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}