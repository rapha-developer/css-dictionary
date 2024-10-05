import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const minBlockSizeData: PropertyProps = {
    name: "min block size",
    definition: "A propriedade min-block-size especifica o tamanho mínimo de um elemento na direção do bloco. Se o conteúdo for menor que o tamanho mínimo na direção do bloco, o valor da propriedade min-block-size será aplicado. Se o conteúdo for maior que o tamanho mínimo na direção do bloco, o valor da propriedade min-block-size não terá efeito.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão min-block-size do elemento."
        },
        {
            name: "length",
            value: "Especifica min-block-size em px, pt, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica min-block-size em porcentagem relativa ao tamanho do elemento pai no eixo correspondente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "20px",
            code: "20px"
        },
        {
            name: "60px",
            code: "60px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "150px",
            code: "150px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "40%",
            code: "40%"
        },
        {
            name: "60%",
            code: "60%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}