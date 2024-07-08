import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundOriginData: PropertyProps = {
    name: "background origin",
    definition: "Especifica a posição de origem (a área de posicionamento de fundo) de uma imagem de fundo",
    category: "css property",
    values: [
        {
            name: "padding-box",
            value: "Valor padrão. A imagem de fundo começa no canto superior esquerdo da borda de preenchimento"
        },
        {
            name: "border-box",
            value: "A imagem de fundo começa no canto superior esquerdo da borda"
        },
        {
            name: "content-box",
            value: "A imagem de fundo começa no canto superior esquerdo do conteúdo"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "padding-box",
            code: "padding-box"
        },
        {
            name: "border-box",
            code: "border-box"
        },
        {
            name: "content-box",
            code: "content-box"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}