import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const zoomData: PropertyProps = {
    name: "zoom",
    definition: "A propriedade zoom especifica o fator de zoom para um elemento. Um elemento pode ser ampliado e reduzido.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Valor padrão. O elemento é renderizado normalmente"
        },
        {
            name: "%",
            value: "Especifica o fator de zoom em porcentagem. 100% = normal. Para aumentar o zoom, use valores maiores que 100%. Para diminuir o zoom, use valores menores que 100%."
        },
        {
            name: "number",
            value: "Especifica o fator de zoom como um número percentual. 1,0 = normal. Para aumentar o zoom, use valores maiores que 1,0. Para diminuir o zoom, use valores menores que 1,0."
        },
        {
            name: "unset",
            value: "Desativa o fator de zoom (volta ao normal)"
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "150%",
            code: "150%"
        },
        {
            name: "70%",
            code: "70%"
        },
        {
            name: "1.2",
            code: "1.2"
        },
        {
            name: "0.5",
            code: "0.5"
        },
        {
            name: "unset",
            code: "unset"
        },
        genericPropertyExamplesData.initial,
    ]
}