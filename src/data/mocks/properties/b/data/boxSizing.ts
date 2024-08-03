import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const boxSizingData: PropertyProps = {
    name: "box sizing",
    definition: "Define como a largura e a altura de um elemento são calculadas: devem incluir preenchimento e bordas ou não.",
    category: "css property",
    values: [
        {
            name: "content-box",
            value: "Padrão. As propriedades width e height (e propriedades min/max) incluem apenas o conteúdo. Borda e preenchimento não estão incluídos"
        },
        {
            name: "border-box",
            value: "As propriedades de largura e altura (e propriedades min/max) incluem conteúdo, preenchimento e borda."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "content-box",
            code: "content-box"
        },
        {
            name: "border-box",
            code: "border-box"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}