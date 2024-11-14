import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const tabSizeData: PropertyProps = {
    name: "tab size",
    definition: "A propriedade tab-size especifica a largura de um caractere de tabulação. Em HTML, o caractere de tabulação é geralmente exibido como um único caractere de espaço, exceto para alguns elementos, como <textarea> e <pre>, e o resultado da propriedade tab-size será visível apenas para esses elementos.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "O número de caracteres de espaço a serem exibidos para cada caractere de tabulação. O valor padrão é 8"
        },
        {
            name: "length",
            value: "O comprimento de um caractere de tabulação"
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "4",
            code: "4"
        },
        {
            name: "8",
            code: "8"
        },
        {
            name: "12",
            code: "12"
        },
        genericPropertyExamplesData.initial,
    ]
}