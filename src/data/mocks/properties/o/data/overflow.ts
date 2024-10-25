import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const overflowData: PropertyProps = {
    name: "overflow",
    definition: "A propriedade overflow especifica o que deve acontecer se o conteúdo transbordar a caixa de um elemento. Esta propriedade especifica se deve recortar o conteúdo ou adicionar barras de rolagem quando o conteúdo de um elemento for muito grande para caber em uma área especificada. Nota: A propriedade overflow funciona apenas para elementos de bloco com uma altura especificada.",
    category: "css property",
    values: [
        {
            name: "visible",
            value: "O overflow não é recortado. Ele é renderizado fora da caixa do elemento. Este é o padrão"
        },
        {
            name: "hidden",
            value: "O overflow é recortado e o restante do conteúdo ficará invisível. O conteúdo pode ser rolado programaticamente (por exemplo, definindo scrollLeft ou scrollTo())"
        },
        {
            name: "clip",
            value: "O overflow é recortado, e o restante do conteúdo ficará invisível. Proíbe rolagem, incluindo rolagem programática."
        },
        {
            name: "scroll",
            value: "O estouro é recortado, mas uma barra de rolagem é adicionada para ver o restante do conteúdo"
        },
        {
            name: "auto",
            value: "Se o estouro for cortado, uma barra de rolagem deve ser adicionada para ver o restante do conteúdo"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "visible",
            code: "visible"
        },
        {
            name: "scroll",
            code: "scroll"
        },
        {
            name: "hidden",
            code: "hidden"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "clip",
            code: "clip"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}