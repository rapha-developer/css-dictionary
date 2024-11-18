import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textDecorationColorData: PropertyProps = {
    name: "text decoration color",
    definition: "A propriedade text-decoration-color especifica a cor da decoração do texto (sublinhados, sobrelinhados, linhas tracejadas).",
    category: "css property",
    values: [
        {
            name: "color",
            value: "Especifica a cor da decoração do texto"
        },
        {
            name: "DICA",
            value: "Veja também a propriedade text-decoration, que é uma propriedade abreviada para text-decoration-line, text-decoration-style, text-decoration-color e text-decoration-thickness."
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
            name: "rgb(0, 255, 0)",
            code: "rgb(0, 255, 0)"
        },
        {
            name: "rgba(0, 255, 0, 0.5)",
            code: "rgba(0, 255, 0, 0.5)"
        },
        {
            name: "hsl(0, 100%, 50%)",
            code: "hsl(0, 100%, 50%)"
        },
        {
            name: "hsla(0, 100%, 50%, 0.1)",
            code: "hsla(0, 100%, 50%, 0.1)"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}