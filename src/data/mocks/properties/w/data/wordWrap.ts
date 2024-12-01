import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const wordWrapData: PropertyProps = {
    name: "word wrap",
    definition: "A propriedade word-wrap permite que palavras longas sejam quebradas e quebradas na próxima linha.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Quebrar palavras somente em pontos de quebra permitidos. Este é o padrão."
        },
        {
            name: "break-word",
            value: "Permite que palavras inquebráveis ​​sejam quebradas."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "break-word",
            code: "break-word"
        },
        genericPropertyExamplesData.initial,
    ]
}