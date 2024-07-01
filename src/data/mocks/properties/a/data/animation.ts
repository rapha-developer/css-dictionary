import { PropertyProps } from "../../../../../types/PropertyProps";

export const animationData: PropertyProps = {
    name: "animation",
    definition: "A propriedade de animação aplica uma animação entre estilos. É uma abreviação para: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state.",
    category: "css property",
    values: [
        {
            name: "bounce 1s infinite",
            value: "Mover um elemento de -25% de altura até o piso. A animação dura 1 segundo. Então começa de novo e continua para sempre (infinito)."
        },
        {
            name: "spin 1s linear infinite",
            value: "Crie uma rotação linear, com duração de 1 segundo. Então começa de novo e continua para sempre (infinito)."
        },
        {
            name: "ping 1s infinite",
            value: "Dimensionar um elemento e esmaecer como um sinal de radar ou ondulação de água. A animação dura 1 segundo. Então começa de novo e continua para sempre (infinito)"
        },
        {
            name: "pulse 1s infinite",
            value: "Faça um elemento aparecer e desaparecer suavemente. A animação dura 1 segundo. Então começa de novo e continua para sempre (infinito)"
        }
    ],
    examples: [
        {
            name: "bounce",
            code: "bounce"
        }, 
        {
            name: "spin",
            code: "spin"
        },
        {
            name: "ping",
            code: "ping"
        },
        {
            name: "pulse",
            code: "pulse"
        }, 
    ],
}