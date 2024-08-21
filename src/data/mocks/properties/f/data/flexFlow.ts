import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexFlowData: PropertyProps = {
    name: "flex flow",
    definition: "A propriedade flex-flow é uma propriedade abreviada para: flex-direction, flex-wrap.",
    category: "css property",
    values: [
        {
            name: "flex-direction",
            value: "Especificando a direção dos itens flexíveis. Valores permitidos: row, row-reverse, column, column-reverse, initial e inherit. O valor padrão é 'row'"
        },
        {
            name: "flex-wrap",
            value: "Especificando se os itens flexíveis devem ser embrulhados (wrap) ou não. Valores permitidos: nowrap, wrap, wrap-reverse, initial e inherit. O valor padrão é 'nowrap'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "row nowrap",
            code: "row nowrap"
        },
        {
            name: "row-reverse nowrap",
            code: "row-reverse nowrap"
        },
        {
            name: "column nowrap",
            code: "column nowrap"
        },
        {
            name: "column-reverse nowrap",
            code: "column-reverse nowrap"
        },
        {
            name: "row wrap",
            code: "row wrap"
        },
        {
            name: "row-reverse wrap",
            code: "row-reverse wrap"
        },
        {
            name: "column wrap",
            code: "column wrap"
        },
        {
            name: "column-reverse wrap",
            code: "column-reverse wrap"
        },
        {
            name: "row wrap-reverse",
            code: "row wrap-reverse"
        },
        {
            name: "row-reverse wrap-reverse",
            code: "row-reverse wrap-reverse"
        },
        {
            name: "column wrap-reverse",
            code: "column wrap-reverse"
        },
        {
            name: "column-reverse wrap-reverse",
            code: "column-reverse wrap-reverse"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}