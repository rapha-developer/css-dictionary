import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const quotesData: PropertyProps = {
    name: "quotes",
    definition: "A propriedade quotes define o tipo de aspas para citações.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Especifica que os valores 'open-quote' e 'close-quote' da propriedade 'content' não produzirão nenhuma aspa"
        },
        {
            name: "string string string string",
            value: "Especifica quais aspas usar. Os dois primeiros valores especificam o primeiro nível de incorporação de aspas, os dois valores seguintes especificam o próximo nível de incorporação de aspas, etc."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "'‹' '›'",
            code: "'‹' '›'"
        },
        {
            name: "none",
            code: "none"
        },
        {
            name: "'«' '»'",
            code: "'«' '»'"
        },
        {
            name: "'‘' '’'",
            code: "'‘' '’'"
        },
        {
            name: "'‹' '›' '«' '»'",
            code: "'‹' '›' '«' '»'"
        },
        {
            name: "'”' '„'",
            code: "'”' '„'"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}