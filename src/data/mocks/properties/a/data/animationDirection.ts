import { PropertyProps } from "../../../../../types/PropertyProps";

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
        {
            name: "initial",
            value: "Define esta propriedade com seu valor padrão. Leia sobre initial no glossário"
        },
        {
            name: "inherit",
            value: "Herda esta propriedade de seu elemento pai. Leia sobre inherit no glossário"
        }
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
        {
            name: "initial",
            code: "initial"
        },
        {
            name: "inherit",
            code: "inherit"
        },
    ]
}
