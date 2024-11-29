import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const windowsData: PropertyProps = {
    name: "windows",
    definition: "A propriedade widows especifica o número mínimo de linhas que devem ser deixadas no topo de uma página ou coluna.",
    category: "css property",
    values: [
        {
            name: "integer",
            value: "Especifica o número mínimo de linhas que devem ser deixadas no topo de uma página ou coluna. Valores negativos não são permitidos"
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        genericPropertyExamplesData.initial,
    ]
}