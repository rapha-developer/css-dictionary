import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const directionData: PropertyProps = {
    name: "direction",
    definition: "A propriedade direction especifica a direção do texto/direção da escrita dentro de um elemento de nível de bloco. Dica: Use esta propriedade junto com a propriedade unicode-bidi para definir ou retornar se o texto deve ser substituído para oferecer suporte a vários idiomas no mesmo documento",
    category: "css property",
    values: [
        {
            name: "ltr",
            value: "A direção do texto vai da esquerda para a direita. Este é o padrão"
        },
        {
            name: "rtl",
            value: "A direção do texto vai da direita para a esquerda"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "ltr",
            code: "ltr"
        },
        {
            name: "rtl",
            code: "rtl"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}