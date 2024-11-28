import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const verticalAlignData: PropertyProps = {
    name: "vertical align",
    definition: "A propriedade vertical-align define o alinhamento vertical de um elemento.",
    category: "css property",
    values: [
        {
            name: "baseline",
            value: "O elemento é alinhado com a linha de base do pai. Este é o padrão."
        },
        {
            name: "length",
            value: "Aumenta ou diminui um elemento pelo comprimento especificado. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Aumenta ou diminui um elemento em uma porcentagem da propriedade 'line-height'. Valores negativos são permitidos."
        },
        {
            name: "super",
            value: "O elemento é alinhado com a linha de base sobrescrita do pai."
        },
        {
            name: "top",
            value: "O elemento está alinhado com o topo do elemento mais alto da linha."
        },
        {
            name: "text-top",
            value: "O elemento é alinhado com a parte superior da fonte do elemento pai."
        },
        {
            name: "middle",
            value: "O elemento é colocado no meio do elemento pai."
        },
        {
            name: "bottom",
            value: "O elemento está alinhado com o elemento mais baixo da linha."
        },
        {
            name: "text-bottom",
            value: "O elemento é alinhado com a parte inferior da fonte do elemento pai."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "baseline",
            code: "baseline"
        },
        {
            name: "sub",
            code: "sub"
        },
        {
            name: "super",
            code: "super"
        },
        {
            name: "text-top",
            code: "text-top"
        },
        {
            name: "middle",
            code: "middle"
        },
        {
            name: "text-bottom",
            code: "text-bottom"
        },
        {
            name: "0px",
            code: "0px"
        },
        {
            name: "25px",
            code: "25px"
        },
        {
            name: "-25px",
            code: "-25px"
        },
        {
            name: "1cm",
            code: "1cm"
        },
        {
            name: "10%",
            code: "10%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
    ]
}