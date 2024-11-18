import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textDecorationLineData: PropertyProps = {
    name: "text decoration line",
    definition: "A propriedade text-decoration-line define o tipo de decoração de texto a ser usado (como sublinhado, sobrelinhado, tracejado).",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Não especifica nenhuma linha para a decoração de texto"
        },
        {
            name: "underline",
            value: "Especifica que uma linha será exibida abaixo do texto"
        },
        {
            name: "overline",
            value: "Especifica que uma linha será exibida sobre o texto"
        },
        {
            name: "line-through",
            value: "Especifica que uma linha será exibida através do texto"
        },
        {
            name: "DICA:",
            value: "Observe também a propriedade text-decoration, que é uma propriedade abreviada para text-decoration-line, text-decoration-style, text-decoration-color e text-decoration-thickness."
        },
        {
            name: "Observação: ",
            value: "Você também pode combinar mais de um valor, como sublinhado e sobrelinhado, para exibir linhas abaixo e acima do texto."
        },
        genericPropertyValuesData.initial
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "underline",
            code: "underline"
        },
        {
            name: "overline",
            code: "overline"
        },
        {
            name: "line-through",
            code: "line-through"
        },
        {
            name: "underline overline",
            code: "underline overline"
        },
        {
            name: "underline overline line-through",
            code: "underline overline line-through"
        },
        genericPropertyExamplesData.initial
    ]
}