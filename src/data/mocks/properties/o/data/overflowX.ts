import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const overflowXData: PropertyProps = {
    name: "overflow x",
    definition: "A propriedade overflow-x especifica se o conteúdo deve ser recortado, uma barra de rolagem deve ser adicionada ou o conteúdo de overflow deve ser exibido de um elemento em nível de bloco, quando ele transborda nas bordas esquerda e direita.",
    category: "css property",
    values: [
        {
            name: "visible",
            value: "O conteúdo não é recortado e pode ser renderizado fora das bordas esquerda e direita. Este é o padrão"
        },
        {
            name: "hidden",
            value: "O conteúdo é recortado - e nenhum mecanismo de rolagem é fornecido"
        },
        {
            name: "scroll",
            value: "O conteúdo é recortado e um mecanismo de rolagem é fornecido"
        },
        {
            name: "auto",
            value: "Deveria ser fornecido um mecanismo de rolagem para caixas de transbordamento"
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
            name: "hidden",
            code: "hidden"
        },
        {
            name: "scroll",
            code: "scroll"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}