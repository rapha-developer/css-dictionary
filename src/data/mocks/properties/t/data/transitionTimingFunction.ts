import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transitionTimingFunctionData: PropertyProps = {
    name: "transition timing function",
    definition: "A propriedade transition-timing-function especifica a curva de velocidade do efeito de transição. Esta propriedade permite que um efeito de transição mude de velocidade ao longo de sua duração.",
    category: "css property",
    values: [
        {
            name: "ease",
            value: "Valor padrão. Especifica um efeito de transição com um início lento, depois rápido e, em seguida, termina lentamente (equivalente a cubic-bezier(0.25,0.1,0.25,1))"
        },
        {
            name: "linear",
            value: "Especifica um efeito de transição com a mesma velocidade do início ao fim (equivalente a cubic-bezier(0,0,1,1))"
        },
        {
            name: "ease-in",
            value: "Especifica um efeito de transição com um início lento (equivalente a cubic-bezier(0.42,0,1,1))"
        },
        {
            name: "ease-out",
            value: "Especifica um efeito de transição com um final lento (equivalente a cubic-bezier(0,0,0.58,1))"
        },
        {
            name: "ease-in-out",
            value: "Especifica um efeito de transição com início e fim lentos (equivalente a cubic-bezier(0.42,0,0.58,1))"
        },
        {
            name: "step-start",
            value: "Equivalente a steps(1, start)"
        },
        {
            name: "step-end",
            value: "Equivalent to steps(1, end)"
        },
        {
            name: "steps(int,start|end)",
            value: "Especifica uma função de passo, com dois parâmetros. O primeiro parâmetro especifica o número de intervalos na função. Ele deve ser um inteiro positivo (maior que 0). O segundo parâmetro, que é opcional, é o valor 'start' ou 'end', e especifica o ponto em que a mudança de valores ocorre dentro do intervalo. Se o segundo parâmetro for omitido, ele recebe o valor 'end'"
        },
        {
            name: "cubic-bezier(n,n,n,n)",
            value: "Defina seus próprios valores na função cubic-bezier. Os valores possíveis são valores numéricos de 0 a 1"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "ease",
            code: "ease"
        },
        {
            name: "linear",
            code: "linear"
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
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}