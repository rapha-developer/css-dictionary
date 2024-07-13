import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderCollapseData: PropertyProps = {
    name: "border collapse",
    definition: "A propriedade border-collapse define se as bordas da tabela devem ser recolhidas em uma única borda ou separadas como no HTML padrão.",
    category: "css property",
    values: [
        {
            name: "separate",
            value: "As fronteiras são separadas; cada célula exibirá suas próprias bordas. Este é o padrão."
        },
        {
            name: "collapse",
            value: "As bordas são recolhidas em uma única borda quando possível (as propriedades de espaçamento de borda e de células vazias não têm efeito)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "separate",
            code: "separate"
        },
        {
            name: "collapse",
            code: "collapse"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}