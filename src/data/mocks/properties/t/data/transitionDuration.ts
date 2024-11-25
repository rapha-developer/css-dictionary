import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transitionDurationData: PropertyProps = {
    name: "transition duration",
    definition: "A propriedade transition-duration especifica quantos segundos (s) ou milissegundos (ms) um efeito de transição leva para ser concluído",
    category: "css property",
    values: [
        {
            name: "time (tempo)",
            value: "Especifica quantos segundos ou milissegundos um efeito de transição leva para ser concluído. O valor padrão é 0s, o que significa que não haverá efeito"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "500ms",
            code: "500ms"
        },
        {
            name: "1s",
            code: "1s"
        },
        {
            name: "1.25s",
            code: "1.25s"
        },
        {
            name: "1.5s",
            code: "1.5s"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}