import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnsData: PropertyProps = {
    name: "columns",
    definition: "A propriedade columns é uma propriedade abreviada para: column-width & column-count. A parte column-width definirá a largura mínima para cada coluna, enquanto a parte column-count definirá o número máximo de colunas. Ao usar essa propriedade, o layout de várias colunas será automaticamente dividido em uma única coluna em larguras estreitas do navegador, sem a necessidade de consultas de mídia ou outras regras.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. Define a largura da coluna e a contagem de colunas como 'auto'"
        },
        {
            name: "column-width",
            value: "Define a largura mínima para cada coluna"
        },
        {
            name: "column-count",
            value: "Define o número máximo de colunas"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "100px 3",
            code: "100px 3"
        },
        {
            name: "50px 4",
            code: "50px 4"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
