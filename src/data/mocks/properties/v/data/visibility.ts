import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const visibilityData: PropertyProps = {
    name: "visibility",
    definition: "A propriedade visibility especifica se um elemento é visível ou não.",
    category: "css property",
    values: [
        {
            name: "visible",
            value: "Valor padrão. O elemento é visível"
        },
        {
            name: "hidden",
            value: "O elemento está oculto (mas ainda ocupa espaço)"
        },
        {
            name: "collapse",
            value: "Somente para linhas de tabela (<tr>), grupos de linhas (<tbody>), colunas (<col>), grupos de colunas (<colgroup>) e itens flexíveis. Este valor remove uma linha ou coluna como se display: none fosse usado. Se collapse for usado em outros elementos, ele será renderizado como 'hidden'"
        },
        {
            name: "DICA:",
            value: "Elementos ocultos ainda ocupam espaço na página. Use a propriedade CSS display para ocultar e remover um elemento do layout do documento!"
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "visible",
            code: "visible"
        },
        {
            name: "hidden",
            code: "hidden"
        },
        genericPropertyExamplesData.initial,
    ]
}