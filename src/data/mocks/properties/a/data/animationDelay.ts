import { PropertyProps } from "../../../../../types/PropertyProps";

export const animationDelayData: PropertyProps = {
    name: "animation delay",
    definition: "A propriedade animation-delay específica um atraso para o início de uma animação. A animação pode começar mais tarde, imediatamente do seu início, ou imediatamente e no meio da animação.",
    category: "css property",
    values: [
        {
            name: "tempo",
            value: "Define o número de segundos(s) ou milissegundos(ms) de espera antes do início da animação. O valor padrão é 0. Valores negativos são permitidos. Se você usar valores negativos, a animação começará como se já tivesse sido reproduzida por N segundos/milissegundos."
        },
        {
            name: "initial",
            value: "Define esta propriedade com seu valor padrão. Leia sobre initial no glossário"
        },
        {
            name: "inherit",
            value: "Herda esta propriedade de seu elemento pai. Leia sobre inherit no glossário"
        },
    ],
    examples: [
        {
            name: "750 milisegundos",
            code: "750ms"
        },
        {
            name: "2 segundos",
            code: "2s"
        },
        {
            name: "-2 segundos",
            code: "-2s"
        },
        {
            name: "initial",
            code: "initial"
        },
        {
            name: "inherit",
            code: "inherit"
        },
    ],
}