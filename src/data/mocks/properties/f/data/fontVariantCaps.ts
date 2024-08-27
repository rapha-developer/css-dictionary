import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontVariantCapsData: PropertyProps = {
    name: "font variant caps",
    definition: "A propriedade font-variant-caps controla o uso de glifos alternativos para letras maiúsculas.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Desativa o uso de glifos (glyphs) alternativos"
        },
        {
            name: "small-caps",
            value: "Exibe letras maiúsculas pequenas"
        },
        {
            name: "all-small-caps",
            value: "Exibe letras maiúsculas pequenas para letras maiúsculas e minúsculas"
        },
        {
            name: "petite-caps",
            value: "Exibe letras maiúsculas pequenas"
        },
        {
            name: "all-petite-caps",
            value: "Exibe letras maiúsculas pequenas para letras maiúsculas e minúsculas"
        },
        {
            name: "unicase",
            value: "Exibe letras maiúsculas pequenas para letras maiúsculas e minúsculas"
        },
        {
            name: "titling-caps",
            value: "Exibe letras maiúsculas de título"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "small-caps",
            code: "small-caps"
        },
        {
            name: "all-small-caps",
            code: "all-small-caps"
        },
        {
            name: "petite-caps",
            code: "petite-caps"
        },
        {
            name: "all-petite-caps",
            code: "all-petite-caps"
        },
        {
            name: "unicase",
            code: "unicase"
        },
        {
            name: "titling-caps",
            code: "titling-caps"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}