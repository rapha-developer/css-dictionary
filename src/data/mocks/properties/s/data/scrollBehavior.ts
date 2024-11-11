import { PropertyProps } from "../../../../../types/PropertyProps";

export const scrollBehaviorData: PropertyProps = {
    name: "scroll behavior",
    definition: "A propriedade scroll-behavior especifica se a posição de rolagem deve ser suavemente animada, em vez de um salto direto, quando o usuário clica em um link dentro de uma caixa rolável.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Permite um salto direto 'efeito de rolagem' entre elementos dentro da caixa de rolagem. Este é o padrão"
        },
        {
            name: "smooth",
            value: "Permite um 'efeito de rolagem' suave e animado entre elementos dentro da caixa de rolagem."
        }
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "smooth",
            code: "smooth"
        }
    ]
}