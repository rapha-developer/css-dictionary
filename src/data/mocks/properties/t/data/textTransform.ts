import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textTransformData: PropertyProps = {
    name: "text transform",
    definition: "A propriedade text-transform controla a capitalização do texto.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Sem capitalização. O texto é renderizado como está. Este é o padrão"
        },
        {
            name: "capitalize",
            value: "Transforma o primeiro caractere de cada palavra em maiúscula"
        },
        {
            name: "uppercase",
            value: "Transforma todos os caracteres em maiúsculas"
        },
        {
            name: "lowercase",
            value: "Transforma todos os caracteres em minúsculas"
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
            name: "capitalize",
            code: "capitalize"
        },
        {
            name: "uppercase",
            code: "uppercase"
        },
        {
            name: "lowercase",
            code: "lowercase"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}