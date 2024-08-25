import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontFamilyData: PropertyProps = {
    name: "font family",
    definition: "A propriedade font-family especifica a fonte de um elemento. A propriedade font-family pode conter vários nomes de fontes como um sistema 'fallback'. Se o navegador não suportar a primeira fonte, ele tenta a próxima fonte. Existem dois tipos de nomes de famílias de fontes: family-name - O nome de uma família de fontes, como 'times', 'courier', 'arial', etc; Ou generic-family - O nome de uma família genérica, como 'serif', 'sans-serif', 'cursive', 'fantasy', 'monospace'.",
    category: "css property",
    values: [
        {
            name: "family-name /---/ generic-family",
            value: "Uma lista priorizada de nomes de famílias de fontes e/ou nomes de famílias genéricos"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "outfit",
            code: "'Outfit'"
        },
        {
            name: "sans-serif",
            code: "sans-serif"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}