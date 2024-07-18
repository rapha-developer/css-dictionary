import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderLeftData: PropertyProps = {
    name: "border left",
    definition: "A propriedade border-left é uma abreviação (na seguinte ordem): <border-left-width> <border-left-style> <border-left-color>. Se border-left-color for omitido, a cor aplicada será a cor do texto.",
    category: "css property",
    values: [
        {
            name: "border-left-width",
            value: 'Opcional. Especifica a largura da borda esquerda. O valor padrão é "medium"'
        },
        {
            name: "border-left-style",
            value: 'Obrigatório. Especifica o estilo da borda esquerda. O valor padrão é "none"'
        },
        {
            name: "border-left-color",
            value: "Opcional. Especifica a cor da borda esquerda. O valor padrão é a cor do texto"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "thin solid purple",
            code: "thin solid purple"
        },
        {
            name: "medium dotted gray",
            code: "medium dotted gray"
        },
        {
            name: "thick double blueviolet",
            code: "thick double blueviolet"
        },
        {
            name: "2px outset #9d9cae",
            code: "2px outset #9d9cae"
        },
        {
            name: "10px inset #241442",
            code: "10px inset #241442"
        },
        {
            name: "20px ridge rgb(82, 54, 242)",
            code: "20px ridge rgb(82, 54, 242)"
        },
        {
            name: "8px outset rgb(16, 13, 25)",
            code: "8px outset rgb(16, 13, 25)"
        },

        {
            name: "4px dashed green",
            code: "4px dashed green"
        },
        {
            name: "14px groove",
            code: "14px groove"
        },
        {
            name: "thin double",
            code: "thin double"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}