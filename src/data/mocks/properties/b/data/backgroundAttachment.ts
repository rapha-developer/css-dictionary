import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundAttachmentData: PropertyProps = {
    name: "background attachment",
    definition: "Especifica se as imagens de fundo são fixas ou rolam com o resto da página",
    category: "css property",
    values: [
        {
            name: "scroll",
            value: "A imagem de fundo rolará com a página. Este é o padrão"
        },
        {
            name: "fixed",
            value: "A imagem de fundo não rolará com a página"
        },
        {
            name: "local",
            value: "A imagem de fundo irá rolar com o conteúdo do elemento"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "scroll",
            code: "scroll"
        },
        {
            name: "fixed",
            code: "fixed"
        },
        {
            name: "local",
            code: "local"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}