import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textOverflowData: PropertyProps = {
    name: "text overflow",
    definition: "A propriedade text-overflow especifica como o conteúdo transbordado que não é exibido deve ser sinalizado ao usuário. Ele pode ser recortado, exibir reticências (...) ou exibir uma string personalizada.",
    category: "css property",
    values: [
        {
            name: "clip",
            value: "Valor padrão. O texto é recortado e não acessível"
        },
        {
            name: "ellipsis",
            value: 'Renderize uma reticência ("...") para representar o texto recortado'
        },
        {
            name: "string",
            value: "Renderizar a string fornecida para representar o texto recortado"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit,
        {
            name: "Observação:",
            value: "Ambas as propriedades a seguir são necessárias para text-overflow: white-space: nowrap; & overflow: hidden"
        }
    ],
    examples: [
        {
            name: "clip",
            code: "clip"
        },
        {
            name: "ellipsis",
            code: "ellipsis"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}