import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textDecorationStyleData: PropertyProps = {
    name: "text decoration style",
    definition: "A propriedade text-decoration-style define o estilo da decoração do texto (como sólido, ondulado, pontilhado, tracejado, duplo).",
    category: "css property",
    values: [
        {
            name: "solid",
            value: "Valor padrão. A linha será exibida como uma única linha"
        },
        {
            name: "double",
            value: "A linha será exibida como uma linha dupla"
        },
        {
            name: "dotted",
            value: "A linha será exibida como uma linha pontilhada"
        },
        {
            name: "dashed",
            value: "A linha será exibida como uma linha tracejada"
        },
        {
            name: "wavy",
            value: "A linha será exibida como uma linha ondulada"
        },
        genericPropertyValuesData.initial,
        {
            name: "DICA:",
            value: "Observe também a propriedade text-decoration, que é uma propriedade abreviada para text-decoration-line, text-decoration-style, text-decoration-color e text-decoration-thickness."
        },
    ],
    examples: [
        {
            name: "solid",
            code: "solid"
        },
        {
            name: "double",
            code: "double"
        },
        {
            name: "dotted",
            code: "dotted"
        },
        {
            name: "dashed",
            code: "dashed"
        },
        {
            name: "wavy",
            code: "wavy"
        },
        genericPropertyExamplesData.initial
    ]
}