import { PropertyProps } from "../../../../../types/PropertyProps";

export const animationDelayData: PropertyProps = {
    name: "animation delay",
    definition: "A propriedade animation-delay específica um atraso para o início de uma animação. A animação pode começar mais tarde, imediatamente do seu início, ou imediatamente e no meio da animação.",
    category: "css property",
    values: [
        {
            name: "tempo",
            value: "O deslocamento de tempo, do momento em que a animação é aplicada ao elemento, no qual a animação deve começar. Isso pode ser especificado em segundos ( s) ou milissegundos ( ms). A unidade é obrigatória."
        }
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
    ],
}