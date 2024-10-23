import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const orderData: PropertyProps = {
    name: "order",
    definition: "A propriedade order especifica a ordem de um item flexível em relação ao restante dos itens flexíveis dentro do mesmo contêiner.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "Valor padrão 0. Especifica a ordem do item flexível"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "1",
            code: "1"
        },
        {
            name: "2",
            code: "2"
        },
        {
            name: "3",
            code: "3"
        },
        {
            name: "4",
            code: "4"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}