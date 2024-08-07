import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const colorData: PropertyProps = {
    name: "color",
    definition: "A propriedade color especifica a cor do texto.",
    category: "css property",
    values: [
        {
            name: "color",
            value: "Especifica a cor do texto"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "red",
            code: "red"
        },
        {
            name: "#0000ff",
            code: "#0000ff"
        },
        {
            name: "green",
            code: "rgb(0, 255, 0)"
        },
        {
            name: "dark yellow",
            code: "rgba(200, 189, 0, 0.5)"
        },
        {
            name: "pink",
            code: "hsl(0, 100%, 80%)"
        },
        {
            name: "grey",
            code: "grey"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
