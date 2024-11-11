import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const scaleData: PropertyProps = {
    name: "scale",
    definition: "A propriedade scale permite que você altere o tamanho dos elementos. A propriedade scale define valores para o quanto um elemento é dimensionado nas direções x e y. Você também pode definir o quanto um elemento é dimensionado na direção z. Os valores de escala podem ser fornecidos como um valor, dois valores ou três valores.",
    category: "css property",
    values: [
        {
            name: "x-axis",
            value: "Define o fator de escala no eixo x. Valores possíveis: número e %."
        },
        {
            name: "y-axis",
            value: "Define o fator de escala no eixo y. Valores possíveis: número e %."
        },
        {
            name: "z-axis",
            value: "Define o fator de escala no eixo z. Valores possíveis: número e %."
        },
        {
            name: "Observação:",
            value: "Se um valor for fornecido ➤ o elemento será dimensionado na mesma quantidade nas direções x e y"
        },
        {
            name: "Observação:",
            value: "Se dois valores forem fornecidos ➤ o elemento será dimensionado nas direções x e y individualmente."
        },
        {
            name: "Observação: ",
            value: "Se três valores forem fornecidos ➤ o elemento será dimensionado nas direções x, y e z individualmente."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "1",
            code: "1"
        },
        {
            name: "2",
            code: "2"
        },
        {
            name: "0.5",
            code: "0.5"
        },
        {
            name: "1 2",
            code: "1 2"
        },
        {
            name: "2 1",
            code: "2 1"
        },
        {
            name: "-1 1",
            code: "-1 1"
        },
        {
            name: "1 -1",
            code: "1 -1"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}