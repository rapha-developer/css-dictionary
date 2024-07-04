import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const animationTimingFunctionData: PropertyProps = {
    name: "animation timing function",
    definition: "Especifica a curva de velocidade de uma animação",
    category: "css property",
    values: [
        {
            name: "linear",
            value: "A animação tem a mesma velocidade do início ao fim"
        },
        {
            name: "ease",
            value: "Valor padrão. A animação tem um início lento, depois rápido, antes de terminar lentamente"
        },
        {
            name: "ease-in",
            value: "A animação tem um início lento"
        },
        {
            name: "ease-out",
            value: "A animação tem um final lento"
        },
        {
            name: "ease-in-out",
            value: "A animação tem um início lento e um final lento"
        },
        {
            name: "step-start",
            value: "Equivalente a etapas(1, início)"
        },
        {
            name: "step-end",
            value: "Equivalente a etapas(1, fim)"
        },
        {
            name: "steps(int,start|end)",
            value: 'Especifica uma função de revisão, com dois parâmetros. O primeiro parâmetro especifica o número de intervalos na função. Deve ser um número inteiro positivo (maior que 0). O segundo parâmetro, que é opcional, é o valor "início" ou "fim" e especifica o ponto em que ocorre a mudança de valores dentro do intervalo. Se o segundo parâmetro for omitido, será atribuído o valor "end"'
        },
        {
            name: "cubic-bezier(n,n,n,n)",
            value: "Defina seus próprios valores na função cúbico-bezier os valores possíveis são valores numéricos de 0 a 1"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "linear",
            code: "linear"
        },
        {
            name: "ease",
            code: "ease"
        },
        {
            name: "ease-in",
            code: "ease-in"
        },
        {
            name: "ease-out",
            code: "ease-out"
        },
        {
            name: "ease-in-out",
            code: "ease-in-out"
        },
        {
            name: "step-start",
            code: "step-start"
        },
        {
            name: "step-end",
            code: "step-end"
        },
        {
            name: "steps(1, start)",
            code: "steps(1, start)"
        },
        {
            name: "steps(2, end)",
            code: "steps(2, end)"
        },
        {
            name: "cubic-bezier",
            code: "cubic-bezier(0.5,0.7,1,0.2)"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}