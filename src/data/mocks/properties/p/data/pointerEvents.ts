import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const pointerEventsData: PropertyProps = {
    name: "pointer events",
    definition: "A propriedade pointer-events define se um elemento reage ou não a eventos de ponteiro.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "O elemento reage a eventos de ponteiro, como :hover e clique. Este é o padrão"
        },
        {
            name: "none",
            value: "O elemento não reage a eventos de ponteiro"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "none",
            code: "none"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}