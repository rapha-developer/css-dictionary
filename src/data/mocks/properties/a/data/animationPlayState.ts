import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationPlayStateData: PropertyProps = {
    name: "animation play state",
    definition: "Especifica se a animação está em execução ou pausada",
    category: "css property",
    values: [
        {
            name: "paused",
            value: "Especifica que a animação está pausada"
        },
        {
            name: "running",
            value: "Valor padrão. Especifica que a animação está em execução"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "paused",
            code: "paused"
        },
        {
            name: "running",
            code: "running"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ],
}