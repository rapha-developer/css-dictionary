import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const caretColorData: PropertyProps = {
    name: "caret color",
    definition: "A propriedade caret-color especifica a cor do cursor (cursor em texto) em entradas, áreas de texto ou qualquer elemento editável.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Os navegadores usam cor atual (currentColor) para o caret (cursor em texto)"
        },
        {
            name: "color",
            value: "Especifica uma cor a ser usada para o cursor. Todos os valores legais de cores podem ser usados ​​(rgb, hexadecimal, cor nomeada, etc.)."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "green",
            code: "green"
        },
        {
            name: "red",
            code: "red"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}