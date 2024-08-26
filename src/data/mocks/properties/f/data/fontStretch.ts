import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontStretchData: PropertyProps = {
    name: "font stretch",
    definition: "A propriedade font-stretch permite que você torne o texto mais estreito (condensado) ou mais largo (expandido). Algumas fontes fornecem faces adicionais; faces condensadas e faces expandidas. Para essas fontes, você pode usar a propriedade font-stretch para selecionar uma face de fonte normal, condensada ou expandida. Esta propriedade não tem efeito se a fonte selecionada não oferecer faces condensadas ou expandidas!",
    category: "css property",
    values: [
        {
            name: "ultra-condensed",
            value: "Torna o texto o mais estreito possível"
        },
        {
            name: "extra-condensed",
            value: "Torna o texto mais estreito do que o condensado, mas não tão estreito quanto o ultracondensado"
        },
        {
            name: "condensed",
            value: "Torna o texto mais estreito do que o semi-condensado, mas não tão estreito quanto o extra-condensado"
        },
        {
            name: "semi-condensed",
            value: "Torna o texto mais estreito do que o normal, mas não tão estreito quanto o condensado"
        },
        {
            name: "normal",
            value: "Valor padrão. Sem alongamento de fonte"
        },
        {
            name: "semi-expanded",
            value: "Torna o texto mais largo que o normal, mas não tão largo quanto expandido"
        },
        {
            name: "expanded",
            value: "Torna o texto mais largo que semi-expandido, mas não tão largo quanto extra-expandido"
        },
        {
            name: "extra-expanded",
            value: "Torna o texto mais largo que expandido, mas não tão largo quanto ultra-expandido"
        },
        {
            name: "ultra-expanded",
            value: "Torna o texto o mais largo possível"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "ultra-condensed",
            code: "ultra-condensed"
        },
        {
            name: "condensed",
            code: "condensed"
        },
        {
            name: "semi-condensed",
            code: "semi-condensed"
        },
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "expanded",
            code: "expanded"
        },
        {
            name: "ultra-expanded",
            code: "ultra-expanded"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}