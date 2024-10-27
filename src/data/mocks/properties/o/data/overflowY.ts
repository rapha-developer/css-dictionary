import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const overflowYData: PropertyProps = {
    name: "overflow y",
    definition: "A propriedade overflow-y especifica se deve recortar o conteúdo, adicionar uma barra de rolagem ou exibir o conteúdo de overflow de um elemento de nível de bloco, quando ele transborda nas bordas superior e inferior. Dica: Use a propriedade overflow-x para determinar o recorte nas bordas esquerda e direita",
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