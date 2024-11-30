import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const wordBreakData: PropertyProps = {
    name: "word break",
    definition: "A propriedade word-break especifica como as palavras devem ser quebradas ao chegar ao final de uma linha.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Valor padrão. Usa regras de quebra de linha padrão."
        },
        {
            name: "break-all",
            value: "Para evitar estouro, a palavra pode ser quebrada em qualquer caractere"
        },
        {
            name: "keep-all",
            value: "Quebras de palavras não devem ser usadas para texto em chinês/japonês/coreano (CJK). O comportamento de texto não CJK é o mesmo que o valor 'normal'"
        },
        {
            name: "break-word",
            value: "Obsoleto. Para evitar estouro, a palavra pode ser quebrada em pontos arbitrários"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "keep-all",
            code: "keep-all"
        },
        {
            name: "break-word",
            code: "break-word"
        },
        {
            name: "break-all",
            code: "break-all"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}