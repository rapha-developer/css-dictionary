import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const justifyContentData: PropertyProps = {
    name: "justify content",
    definition: "A propriedade justify-content alinha os itens do contêiner flexível quando os itens não usam todo o espaço disponível no eixo principal (horizontalmente). Nota: A propriedade justify-content também pode ser usada em um contêiner de grade para alinhar itens de grade na direção inline (inline direction). Para páginas em inglês, a direção inline é da esquerda para a direita e a direção do bloco é para baixo.",
    category: "css property",
    values: [
        {
            name: "flex-start",
            value: "Valor padrão. Os itens são posicionados no início do contêiner"
        },
        {
            name: "flex-end",
            value: "Os itens são posicionados no final do contêiner"
        },
        {
            name: "center",
            value: "Os itens são posicionados no centro do contêiner"
        },
        {
            name: "space-between",
            value: "Os itens terão espaço entre eles"
        },
        {
            name: "space-around",
            value: "Os itens terão espaço antes, entre e depois deles"
        },
        {
            name: "space-evenly",
            value: "Os itens terão espaço igual ao redor deles"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit,
        {
            name: "Dica:",
            value: "Use a propriedade align-items para alinhar os itens verticalmente."
        }
    ],
    examples: [
        {
            name: "flex-start",
            code: "flex-start"
        },
        {
            name: "flex-end",
            code: "flex-end"
        },
        {
            name: "center",
            code: "center"
        },
        {
            name: "space-between",
            code: "space-between"
        },
        {
            name: "space-around",
            code: "space-around"
        },
        {
            name: "space-evenly",
            code: "space-evenly"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}