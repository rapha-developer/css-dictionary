import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationDurationData: PropertyProps = {
    name: "animation duration",
    definition: "Especifica quanto tempo uma animação deve levar para completar um ciclo",
    category: "css property",
    values: [
        {
            name: "tempo",
            value: "Especifica quanto tempo uma animação deve levar para completar um ciclo. Isso pode ser especificado em segundos ou milissegundos. O valor padrão é 0, o que significa que nenhuma animação ocorrerá"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "500 ms",
            code: "500ms"
        },
        {
            name: "1s - um segundo",
            code: "1s"
        },
        {
            name: "3s - três segundos",
            code: "3s"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}