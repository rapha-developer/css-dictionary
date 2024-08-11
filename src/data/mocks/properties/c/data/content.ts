import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const contentData: PropertyProps = {
    name: "content",
    definition: "A propriedade content é usada com os pseudoelementos ::before e ::after para inserir conteúdo gerado.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Valor padrão. Define o conteúdo, se especificado, para normal, cujo padrão é 'none' (que é nada)"
        },
        {
            name: "none",
            value: "Define o conteúdo, se especificado, para nada"
        },
        {
            name: "count",
            value: "Define o conteúdo como um contador"
        },
        {
            name: "attr(attribute)",
            value: "Define o conteúdo como um dos atributos do seletor"
        },
        {
            name: "string",
            value: "Define o conteúdo para o texto que você especificar"
        },
        {
            name: "open-quote",
            value: "Define o conteúdo como uma citação de abertura"
        },
        {
            name: "close-quote",
            value: "Define o conteúdo como uma citação de fechamento"
        },
        {
            name: "no-open-quote",
            value: "Remove a citação de abertura do conteúdo, se especificado"
        },
        {
            name: "no-close-quote",
            value: "Remove a citação de fechamento do conteúdo, se especificado"
        },
        {
            name: "url(url)",
            value: "Define o conteúdo como algum tipo de mídia (uma imagem, um som, um vídeo, etc.)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "none",
            code: "none"
        },
        {
            name: "counter(myIndex)",
            code: "counter(myIndex)"
        },
        {
            name: "attr(content)",
            code: "attr(content)"
        },
        {
            name: "string",
            code: "string"
        },
        {
            name: "open-quote",
            code: "open-quote"
        },
        {
            name: "close-quote",
            code: "close-quote"
        },
        {
            name: "url(url)",
            code: "url(/loading.gif)"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
