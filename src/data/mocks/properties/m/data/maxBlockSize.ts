import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const maxBlockSizeData: PropertyProps = {
    name: "max block size",
    definition: "A propriedade max-block-size especifica o tamanho máximo de um elemento na direção do bloco. Se o conteúdo for menor que o tamanho máximo na direção do bloco, o valor da propriedade max-block-size não terá efeito. Se o conteúdo for maior que o tamanho máximo na direção do bloco, o valor da propriedade max-block-size será aplicado.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão max-block-size do elemento."
        },
        {
            name: "length",
            value: "Especifica max-block-size em px, pt, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica o tamanho máximo do bloco em porcentagem em relação ao tamanho do elemento pai no eixo correspondente."
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