import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const listStyleImageData: PropertyProps = {
    name: "list style image",
    definition: "A propriedade list-style-image substitui o marcador list-item por uma imagem.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Nenhuma imagem será exibida. Em vez disso, a propriedade list-style-type definirá que tipo de marcador de lista será renderizado. Este é o padrão"
        },
        {
            name: "url",
            value: "O caminho para a imagem a ser usada como um marcador de item de lista"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit,
        {
            name: "Nota:",
            value: "Sempre especifique a propriedade list-style-type adicionalmente. Essa propriedade é usada se a imagem, por algum motivo, não estiver disponível."
        },
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "url(1)",
            code: "url('https://www.w3schools.com/cssref/sqpurple.gif')"
        },
        {
            name: "url(2)",
            code: "url('https://www.w3schools.com/cssref/smiley.gif')"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}