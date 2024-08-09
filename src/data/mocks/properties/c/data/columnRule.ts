import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnRuleData: PropertyProps = {
    name: "column rule",
    definition: "A propriedade column-rule define a largura, o estilo e a cor da regra entre colunas.",
    category: "css property",
    values: [
        {
            name: "column-rule-width",
            value: "Define a largura da regra entre colunas. O valor padrão é médio"
        },
        {
            name: "column-rule-style",
            value: "Define o estilo da regra entre colunas. O valor padrão é none"
        },
        {
            name: "column-rule-color",
            value: "Define a cor da regra entre colunas. O valor padrão é a cor do elemento"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "examplo 1",
            code: "4px double #ff00ff"
        },
        {
            name: "exemplo 2",
            code: "4px solid #ff00ff"
        },
        {
            name: "exemplo 3",
            code: "4px solid red"
        },
        {
            name: "exemplo 4",
            code: "16px dotted blue"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
