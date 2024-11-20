import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textOrientationData: PropertyProps = {
    name: "text orientation",
    definition: "A propriedade text-orientation especifica a orientação dos caracteres.",
    category: "css property",
    values: [
        {
            name: "mixed",
            value: "Valor padrão. Os caracteres são girados 90 graus no sentido horário."
        },
        {
            name: "upright",
            value: "Os personagens não são girados, mas sim mantidos em pé."
        },
        {
            name: "sideways",
            value: "Os caracteres são orientados da mesma forma que as linhas de texto no modo de escrita vertical, 90 graus no sentido horário."
        },
        {
            name: "sideways-right",
            value: "Igual ao valor da propriedade lateralmente. Mantido para fins de compatibilidade."
        },
        {
            name: "use-glyph-orientation",
            value: "Para uso em elementos SVG, para que o texto herde as propriedades SVG obsoletas glyph-orientation-vertical e glyph-orientation-horizontal."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "mixed",
            code: "mixed"
        },
        {
            name: "upright",
            code: "upright"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}