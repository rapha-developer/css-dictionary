import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textShadowData: PropertyProps = {
    name: "text shadow",
    definition: "A propriedade text-shadow adiciona sombra ao texto. Esta propriedade aceita uma lista de sombras separadas por vírgulas para serem aplicadas ao texto.",
    category: "css property",
    values: [
        {
            name: "h-shadow",
            value: "Obrigatório. A posição da sombra horizontal. Valores negativos são permitidos"
        },
        {
            name: "v-shadow",
            value: "Obrigatório. A posição da sombra vertical. Valores negativos são permitidos"
        },
        {
            name: "blur-radius",
            value: "Opcional. O raio de desfoque. O valor padrão é 0"
        },
        {
            name: "color",
            value: "Opcional. A cor da sombra. Veja CSS Color Values ​​para uma lista completa de possíveis valores de cor"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "Example 1",
            code: "2px 2px red"
        },
        {
            name: "Example 2",
            code: "5px 5px red"
        },
        {
            name: "Example 3",
            code: "20px 20px red"
        },
        {
            name: "Example 4",
            code: "-10px 10px red"
        },
        {
            name: "Example 5",
            code: "-10px -10px red"
        },
        {
            name: "Example 6",
            code: "5px 5px 3px red"
        },
        {
            name: "Example 7",
            code: "5px 5px 5px red"
        },
        {
            name: "Example 8",
            code: "5px 5px 10px red"
        },
        {
            name: "Example 9",
            code: "5px 5px 10px blue"
        },
        {
            name: "Example 10",
            code: "5px 5px 10px black"
        },
        {
            name: "Example 11",
            code: "5px 5px 10px #00FF00"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}