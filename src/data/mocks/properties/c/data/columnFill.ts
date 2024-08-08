import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnFillData: PropertyProps = {
    name: "column fill",
    definition: "A propriedade column-fill especifica como preencher colunas, balanceadas ou não.",
    category: "css property",
    values: [
        {
            name: "balance",
            value: "Valor padrão. Preenche cada coluna com aproximadamente a mesma quantidade de conteúdo, mas não permitirá que as colunas sejam mais altas que a altura (portanto, as colunas podem ser mais curtas que a altura, pois o navegador distribui o conteúdo uniformemente na horizontal)"
        },
        {
            name: "auto",
            value: "Preenche cada coluna até atingir a altura, e faz isso até ficar sem conteúdo (portanto, esse valor não necessariamente preencherá todas as colunas nem as preencherá uniformemente)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "balance",
            code: "balance"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
