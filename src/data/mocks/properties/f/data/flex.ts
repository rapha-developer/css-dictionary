import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexData: PropertyProps = {
    name: "flex",
    definition: "A propriedade flex é uma propriedade abreviada para: flex-grow, flex-shrink e flex-basis. A propriedade flex define o comprimento flexível em itens flexíveis.",
    category: "css property",
    values: [
        {
            name: "flex-grow",
            value: "Um número que especifica o quanto o item crescerá em relação ao restante dos itens flexíveis"
        },
        {
            name: "flex-shrink",
            value: "Um número que especifica o quanto o item encolherá em relação ao restante dos itens flexíveis"
        },
        {
            name: "flex-basis",
            value: "O comprimento do item. Valores permitidos: 'auto', 'inherit' ou um número seguido por '%', 'px', 'em' ou qualquer outra unidade de comprimento"
        },
        {
            name: "auto",
            value: "O mesmo que 1 1 auto"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0 1 150px",
            code: "0 1 150px"
        },
        {
            name: "0 0 50px",
            code: "0 0 50px"
        },
        {
            name: "3 0 auto",
            code: "3 0 auto"
        },
        {
            name: "0 2 200px",
            code: "0 2 200px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}