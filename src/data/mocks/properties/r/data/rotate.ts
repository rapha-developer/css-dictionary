import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const rotateData: PropertyProps = {
    name: "rotate",
    definition: "A propriedade rotate permite que você gire elementos. A propriedade rotate define um valor para o quanto um elemento é girado no sentido horário em torno do eixo z. Para girar um elemento em torno do eixo x ou y ou de outras maneiras, isso deve ser definido. Os valores para a propriedade de rotação podem ser fornecidos como um ângulo, nome do eixo + ângulo ou três valores + ângulo.",
    category: "css property",
    values: [
        {
            name: "axis",
            value: "Opcional. Se não for definido, o eixo z é o padrão. Define o eixo para girar o elemento. Valores possíveis: x, y & z."
        },
        {
            name: "angle",
            value: "Define o quanto um elemento é rotacionado. Unidades possíveis: deg, rad & turn."
        },
        {
            name: "vector angle",
            value: "Três números definem um vetor para o elemento a ser rotacionado. Os números são coordenadas x, y e z para o vetor, respectivamente. O último valor é o ângulo para quanto rotacionar. Valores possíveis: número número número ângulo"
        },
        {
            name: "Observação:",
            value: "Se um ângulo for fornecido ➤ o elemento será girado no sentido horário em torno do eixo z."
        },
        {
            name: "Observação:",
            value: "Se o nome do eixo + ângulo for fornecido ➤ o elemento será girado no sentido horário em torno desse eixo fornecido."
        },
        {
            name: "Observação:",
            value: "Se três valores forem fornecidos + ângulo ➤ os três valores definirão um vetor em torno do qual o elemento será rotacionado."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0deg",
            code: "0deg"
        },
        {
            name: "30deg",
            code: "30deg"
        },
        {
            name: "z -30deg",
            code: "z -30deg"
        },
        {
            name: "y 60deg",
            code: "y 60deg"
        },
        {
            name: "x 60deg",
            code: "x 60deg"
        },
        {
            name: "1 0 0 60deg",
            code: "1 0 0 60deg"
        },
        {
            name: "y -180deg;",
            code: "y -180deg;"
        },
        {
            name: "1 1 1 60deg",
            code: "1 1 1 60deg"
        },
        {
            name: "1 1 0 60deg",
            code: "1 1 0 60deg"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}