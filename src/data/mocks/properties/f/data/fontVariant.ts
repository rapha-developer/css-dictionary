import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontVariantData: PropertyProps = {
    name: "font variant",
    definition: "A propriedade font-variant especifica se um texto deve ou não ser exibido em fonte de caixa baixa.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "O navegador exibe uma fonte normal. Este é o padrão"
        },
        {
            name: "small-caps",
            value: "O navegador exibe uma fonte small-caps"
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
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}