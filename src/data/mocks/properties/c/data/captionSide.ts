import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const captionSideData: PropertyProps = {
    name: "caption side",
    definition: "A propriedade caption-side especifica o posicionamento de uma legenda de tabela.",
    category: "css property",
    values: [
        {
            name: "top",
            value: "Coloca a legenda acima da tabela. Este é o padrão"
        },
        {
            name: "bottom",
            value: "Coloca a legenda abaixo da tabela"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "top",
            code: "top"
        },
        {
            name: "bottom",
            code: "bottom"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}