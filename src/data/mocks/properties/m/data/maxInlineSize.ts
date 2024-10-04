import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const maxInlineSizeData: PropertyProps = {
    name: "max inline size",
    definition: "A propriedade max-inline-size especifica o tamanho máximo de um elemento na direção inline. Se o conteúdo for menor que o tamanho máximo na direção inline, o valor da propriedade max-inline-size não terá efeito. Se o conteúdo for maior que o tamanho máximo na direção block, o valor da propriedade max-inline-size será aplicado.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão max-inline-size do elemento."
        },
        {
            name: "length",
            value: "Especifica max-inline-size em px, pt, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica max-inline-size em porcentagem relativa ao tamanho do elemento pai no eixo correspondente."
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