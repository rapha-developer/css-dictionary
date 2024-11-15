import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textDecorationData: PropertyProps = {
    name: "text decoration",
    definition: "A propriedade text-decoration especifica a decoração adicionada ao texto e é uma propriedade abreviada para: text-decoration-line (required), text-decoration-color, text-decoration-style e text-decoration-thickness. ",
    category: "css property",
    values: [
        {
            name: "text-decoration-line",
            value: "Define o tipo de decoração de texto a ser usado (como sublinhado, sobrelinhado, linha cruzada)"
        },
        {
            name: "text-decoration-color",
            value: "Define a cor da decoração do texto"
        },
        {
            name: "text-decoration-style",
            value: "Define o estilo da decoração do texto (como sólido, ondulado, pontilhado, tracejado, duplo)"
        },
        {
            name: "text-decoration-thickness",
            value: "Define a espessura da linha de decoração"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "underline",
            code: "underline"
        },
        {
            name: "underline blue",
            code: "underline blue"
        },
        {
            name: "overline",
            code: "overline"
        },
        {
            name: "line-through",
            code: "line-through"
        },
        {
            name: "underline overline",
            code: "underline overline"
        },
        {
            name: "underline overline dotted red",
            code: "underline overline dotted red"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}