import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textEmphasisColorData: PropertyProps = {
    name: "text emphasis color",
    definition: "A propriedade text-emphasis-color define a cor das marcas de ênfase.",
    category: "css property",
    values: [
        {
            name: "color",
            value: "Define a cor das marcas de ênfase. Se nenhuma cor for especificada, ele usa a currentcolor"
        },
        {
            name: "Dica:",
            value: "Nenhuma marca de ênfase é mostrada, a menos que a propriedade text-emphasis-style esteja definida."
        },
        genericPropertyValuesData.initial
    ],
    examples: [
        {
            name: "red",
            code: "red"
        },
        {
            name: "blue",
            code: "blue"
        },
        {
            name: "currentcolor",
            code: "currentcolor"
        },
        {
            name: "rgb(130, 180, 150)",
            code: "rgb(130, 180, 150)"
        },
        genericPropertyExamplesData.initial
    ]
}