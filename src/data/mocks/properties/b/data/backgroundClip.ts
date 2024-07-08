import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundClipData: PropertyProps = {
    name: "background clip",
    definition: "Define até que ponto o plano de fundo (cor ou imagem) deve se estender dentro de um elemento",
    category: "css property",
    values: [
        {
            name: "border-box",
            value: "Valor padrão. O fundo se estende para trás da borda"
        },
        {
            name: "padding-box",
            value: "O fundo se estende para a borda interna da borda"
        },
        {
            name: "content-box",
            value: "O fundo se estende para a borda da caixa de conteúdo"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "border-box",
            code: "border-box"
        },
        {
            name: "padding-box",
            code: "padding-box"
        },
        {
            name: "content-box",
            code: "content-box"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}