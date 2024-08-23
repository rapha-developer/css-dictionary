import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexWrapData: PropertyProps = {
    name: "flex wrap",
    definition: "A propriedade flex-wrap especifica se os itens flexíveis devem ser quebrados ou não.",
    category: "css property",
    values: [
        {
            name: "nowrap",
            value: "Valor padrão. Especifica que os itens flexíveis não serão encapsulados"
        },
        {
            name: "wrap",
            value: "Especifica que os itens flexíveis serão embrulhados (wrap) se necessário"
        },
        {
            name: "wrap-reverse",
            value: "Especifica que os itens flexíveis serão embrulhados (wrap), se necessário, na ordem inversa"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "nowrap",
            code: "nowrap"
        },
        {
            name: "wrap",
            code: "wrap"
        },
        {
            name: "wrap-reverse",
            code: "wrap-reverse"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}