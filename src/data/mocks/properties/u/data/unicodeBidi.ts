import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const unicodeBidiData: PropertyProps = {
    name: "unicode bidi",
    definition: "A propriedade unicode-bidi é usada junto com a propriedade direction para definir ou retornar se o texto deve ser substituído para oferecer suporte a vários idiomas no mesmo documento.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "O elemento não abre um nível adicional de incorporação. Este é o padrão."
        },
        {
            name: "embed",
            value: "Para elementos inline, esse valor abre um nível adicional de incorporação"
        },
        {
            name: "bidi-override",
            value: "Para elementos inline, isso cria uma substituição. Para elementos de bloco, isso cria uma substituição para descendentes de nível inline que não estejam dentro de outro elemento de bloco"
        },
        {
            name: "isolate",
            value: "O elemento é isolado de seus irmãos"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "bidi-override",
            code: "bidi-override"
        },
        {
            name: "isolate",
            code: "isolate"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}