import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textUnderlinePositionData: PropertyProps = {
    name: "text underline position",
    definition: "A propriedade text-underline-position especifica a posição das decorações de texto sublinhado.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O navegador define a posição do sublinhado"
        },
        {
            name: "under",
            value: "Define o sublinhado abaixo da linha de base alfabética"
        },
        {
            name: "from-font",
            value: "Se o arquivo de fonte incluir informações sobre a posição do sublinhado, use esse valor. Se não, use auto"
        },
        {
            name: "left",
            value: "No modo de escrita vertical, o sublinhado será colocado à esquerda do texto. No modo de escrita horizontal, o sublinhado será colocado como auto"
        },
        {
            name: "right",
            value: "No modo de escrita vertical, o sublinhado será colocado à direita do texto. No modo de escrita horizontal, o sublinhado será colocado como auto"
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
            name: "under",
            code: "under"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}