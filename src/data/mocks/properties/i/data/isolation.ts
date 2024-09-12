import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const isolationData: PropertyProps = {
    name: "isolation",
    definition: "A propriedade de isolamento define se um elemento deve criar um novo conteúdo de empilhamento. A propriedade de isolamento define se um elemento deve criar um novo conteúdo de empilhamento.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Um novo contexto de empilhamento é criado somente se uma das propriedades aplicadas ao elemento exigir isso"
        },
        {
            name: "isolate",
            value: "Um novo contexto de empilhamento deve ser criado"
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
            name: "isolate",
            code: "isolate"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}