import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const minInlineSizeData: PropertyProps = {
    name: "min inline size",
    definition: "A propriedade min-inline-size especifica o tamanho mínimo de um elemento na direção inline. Se o conteúdo for menor que o tamanho mínimo na direção inline, o valor da propriedade min-inline-size será aplicado. Se o conteúdo for maior que o tamanho mínimo na direção inline, o valor da propriedade min-inline-size não terá efeito.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor padrão min-inline-size do elemento."
        },
        {
            name: "length",
            value: "Especifica min-inline-size em px, pt, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica min-inline-size em porcentagem relativa ao tamanho do elemento pai no eixo correspondente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "220px",
            code: "220px"
        },
        {
            name: "260px",
            code: "260px"
        },
        {
            name: "300px",
            code: "300px"
        },
        {
            name: "350px",
            code: "350px"
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
            name: "80%",
            code: "80%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}