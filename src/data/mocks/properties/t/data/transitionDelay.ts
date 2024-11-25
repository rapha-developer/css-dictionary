import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transitionDelayData: PropertyProps = {
    name: "transition delay",
    definition: "A propriedade transition-delay especifica quando o efeito de transição começará. O valor do atraso de transição é definido em segundos (s) ou milissegundos (ms).",
    category: "css property",
    values: [
        {
            name: "time (tempo)",
            value: "Especifica o número de segundos ou milissegundos a esperar antes que o efeito de transição comece"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0ms",
            code: "0ms"
        },
        {
            name: "300ms",
            code: "300ms"
        },
        {
            name: "600ms",
            code: "600ms"
        },
        {
            name: "1s",
            code: "1s"
        },
        {
            name: "1.5s",
            code: "1.5s"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}