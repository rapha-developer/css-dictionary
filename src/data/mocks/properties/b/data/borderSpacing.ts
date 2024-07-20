import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderSpacingData: PropertyProps = {
    name: "border spacing",
    definition: "A propriedade border-spacing define a distância entre as bordas das células adjacentes.",
    category: "css property",
    values: [
        {
            name: "length length",
            value: "Especifica a distância entre as bordas das células adjacentes em px, cm, etc. Valores negativos não são permitidos"
        },
        {
            name: "OBSERVAÇÃO",
            value: "Se um valor for especificado, ele definirá o espaçamento horizontal e vertical entre as células. Se dois valores forem especificados, o primeiro define o espaçamento horizontal e o segundo define o espaçamento vertical"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit,
    ],
    examples: [
        {
            name: "0px",
            code: "0px"
        },
        {
            name: "2px",
            code: "2px"
        },
        {
            name: "5px",
            code: "5px"
        },
        {
            name: "10px",
            code: "10px"
        },
        {
            name: "50px",
            code: "50px"
        },
        {
            name: "0px 50px",
            code: "0px 50px"
        },
        {
            name: "1px 5px",
            code: "1px 5px"
        },
        {
            name: "5px 1px",
            code: "5px 1px"
        },
        {
            name: "4px 10px",
            code: "4px 10px"
        },
        {
            name: "20px 30px",
            code: "20px 30px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}