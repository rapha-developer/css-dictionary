import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexGrowData: PropertyProps = {
    name: "flex grow",
    definition: "A propriedade flex-grow especifica quanto o item crescerá em relação ao restante dos itens flexíveis dentro do mesmo contêiner. Se o elemento não for um item flexível, a propriedade flex-grow não tem efeito.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "Um número que especifica quanto o item crescerá em relação ao restante dos itens flexíveis. O valor padrão é 0"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "grow: 0",
            code: "0"
        },
        {
            name: "grow: 1",
            code: "1"
        },
        {
            name: "grow: 2",
            code: "2"
        },
        {
            name: "grow: 3",
            code: "3"
        },
        {
            name: "grow: 4",
            code: "4"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}