import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnWidthData: PropertyProps = {
    name: "column width",
    definition: "A propriedade column-width especifica a largura da coluna. Pense em column-width como uma sugestão de largura mínima para o navegador. Quando o navegador não puder encaixar pelo menos duas colunas na largura especificada, as colunas pararão e cairão em uma única coluna.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "Valor padrão. A largura da coluna será determinada pelo navegador"
        },
        {
            name: "length",
            value: "Um comprimento que especifica a largura das colunas. O número de colunas será o número mínimo de colunas necessárias para mostrar todo o conteúdo no elemento. Leia sobre unidades de comprimento no glossário"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "80px",
            code: "80px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "140px",
            code: "140px"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
