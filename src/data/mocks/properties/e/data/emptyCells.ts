import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const emptyCellsData: PropertyProps = {
    name: "empty cells",
    definition: "A propriedade empty-cells define se bordas devem ou não ser exibidas em células vazias em uma tabela.",
    category: "css property",
    values: [
        {
            name: "show",
            value: "Exibir bordas em células vazias. Este é o padrão"
        },
        {
            name: "hide",
            value: "Ocultar bordas em células vazias"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "show",
            code: "show"
        },
        {
            name: "hide",
            code: "hide"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}