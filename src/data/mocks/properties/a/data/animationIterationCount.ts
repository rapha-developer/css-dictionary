import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationIterationCountData: PropertyProps = {
    name: "animation iteration count",
    definition: "Especifica o número de vezes que uma animação deve ser reproduzida",
    category: "css property",
    values: [
        {
            name: "number",
            value: "Um número que define quantas vezes uma animação deve ser reproduzida. O valor padrão é 1"
        },
        {
            name: "infinite",
            value: "Especifica que a animação deve ser reproduzida infinitas vezes (para sempre)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "apenas uma vez",
            code: "1"
        },
        {
            name: "três vezes",
            code: "3"
        },
        {
            name: "cinco vezes",
            code: "5"
        },
        {
            name: "infinito",
            code: "infinite"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
