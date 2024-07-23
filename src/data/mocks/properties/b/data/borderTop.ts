import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderTopData: PropertyProps = {
    name: "border top",
    definition: "A propriedade border-top é uma abreviação (na seguinte ordem): <border-top-width> <border-top-style> <border-top-color>. Se border-top-color for omitido, a cor aplicada será a cor do texto.",
    category: "css property",
    values: [
        {
            name: "border-top-width",
            value: 'Opcional. Especifica a largura da borda direita. O valor padrão é "medium"'
        },
        {
            name: "border-top-style",
            value: 'Obrigatório. Especifica o estilo da borda direita. O valor padrão é "none"'
        },
        {
            name: "border-top-color",
            value: "Opcional. Especifica a cor da borda direita. O valor padrão é a cor do texto"
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
            name: "2px double blueviolet",
            code: "2px double blueviolet"
        },
        {
            name: "thick outset #9d9cae",
            code: "thick outset #9d9cae"
        },
        {
            name: "4px inset #241442",
            code: "4px inset #241442"
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