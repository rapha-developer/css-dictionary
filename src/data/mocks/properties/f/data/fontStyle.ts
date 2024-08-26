import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontStyleData: PropertyProps = {
    name: "font style",
    definition: "A propriedade font-style especifica o estilo de fonte de um texto.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "O navegador exibe um estilo de fonte normal. Este é o padrão"
        },
        {
            name: "italic",
            value: "O navegador exibe um estilo de fonte itálico"
        },
        {
            name: "oblique",
            value: "O navegador exibe um estilo de fonte oblíquo"
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
            name: "italic",
            code: "italic"
        },
        {
            name: "oblique",
            code: "oblique"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}