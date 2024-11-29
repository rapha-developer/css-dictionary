import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const whiteSpaceData: PropertyProps = {
    name: "white space",
    definition: "A propriedade white-space especifica como o espaço em branco dentro de um elemento é tratado.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Sequências de espaços em branco serão colapsadas em um único espaço em branco. O texto será quebrado quando necessário. Este é o padrão."
        },
        {
            name: "nowrap",
            value: "Sequências de espaços em branco serão colapsadas em um único espaço em branco. O texto nunca será quebrado para a próxima linha. O texto continua na mesma linha até que uma tag <br> seja encontrada."
        },
        {
            name: "pre",
            value: "O espaço em branco é preservado pelo navegador. O texto só será quebrado em quebras de linha. Atua como a tag <pre> em HTML"
        },
        {
            name: "pre-line",
            value: "As sequências de espaços em branco serão colapsadas em um único espaço em branco. O texto será quebrado quando necessário, e as quebras de linha."
        },
        {
            name: "pre-wrap",
            value: "O espaço em branco é preservado pelo navegador. O texto será quebrado quando necessário, e as quebras de linha."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "nowrap",
            code: "nowrap"
        },
        {
            name: "pre",
            code: "pre"
        },
        {
            name: "pre-line",
            code: "pre-line"
        },
        {
            name: "pre-wrap",
            code: "pre-wrap"
        },
        genericPropertyExamplesData.initial,
    ]
}