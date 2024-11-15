import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const tableLayoutData: PropertyProps = {
    name: "table layout",
    definition: "A propriedade table-layout define o algoritmo usado para dispor células, linhas e colunas da tabela.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Os navegadores usam um algoritmo de layout de tabela automático. A largura da coluna é definida pelo conteúdo inquebrável mais largo nas células. O conteúdo ditará o layout"
        },
        {
            name: "fixed",
            value: "Define um algoritmo de layout de tabela fixa. As larguras da tabela e da coluna são definidas pelas larguras da tabela e da coluna ou pela largura da primeira linha de células. Células em outras linhas não afetam as larguras das colunas. Se nenhuma largura estiver presente na primeira linha, as larguras das colunas serão divididas igualmente na tabela, independentemente do conteúdo dentro da célula"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "fixed",
            code: "fixed"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}