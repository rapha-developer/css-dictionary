import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const hyphensData: PropertyProps = {
    name: "hyphens",
    definition: "A propriedade hyphens define se a hifenização pode criar mais oportunidades de quebra suave dentro de uma linha de texto.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "As palavras não são hifenizadas"
        },
        {
            name: "manual",
            value: "Padrão. As palavras são hifenizadas somente em &hyphen; ou &shy; (se necessário)"
        },
        {
            name: "auto",
            value: "As palavras são hifenizadas onde o algoritmo está decidindo (se necessário)"
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
            name: "manual",
            code: "manual"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}