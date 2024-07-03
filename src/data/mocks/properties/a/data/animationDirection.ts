import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationDirectionData: PropertyProps = {
    name: "animation direction",
    definition: "Especifica se uma animação deve ser reproduzida para frente, para trás ou em ciclos alternados",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Valor padrão. A animação é reproduzida normalmente (forwards)"
        },
        {
            name: "reverse",
            value: "A animação é reproduzida na direção reversa (backwards)"
        },
        {
            name: "alternate",
            value: "A animação é reproduzida primeiro para frente e depois para trás"
        },
        {
            name: "alternate-reverse",
            value: "A animação é reproduzida primeiro para trás e depois para frente"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "reverse",
            code: "reverse"
        },
        {
            name: "alternate",
            code: "alternate"
        },
        {
            name: "alternate-reverse",
            code: "alternate-reverse"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
