import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundSizeData: PropertyProps = {
    name: "background size",
    definition: "A propriedade background-size especifica o tamanho das imagens de fundo.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. A imagem de fundo é exibida em seu tamanho original"
        },
        {
            name: "length",
            value: "Define a largura e a altura da imagem de fundo. O primeiro valor define a largura, o segundo valor define a altura. Se apenas um valor for fornecido, o segundo será definido como “auto”. Leia sobre unidades de comprimento"
        },
        {
            name: "percentage",
            value: 'Define a largura e a altura da imagem de fundo em porcentagem do elemento pai. O primeiro valor define a largura, o segundo valor define a altura. Se apenas um valor for fornecido, o segundo será definido como "auto"'
        },
        {
            name: "cover",
            value: "Redimensione a imagem de fundo para cobrir todo o container, mesmo que seja necessário esticar a imagem ou cortar um pouco uma das bordas"
        },
        {
            name: "contain",
            value: "Redimensione a imagem de fundo para garantir que a imagem esteja totalmente visível"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "50%",
            code: "50%"
        },
        {
            name: "75% 40%",
            code: "75% 40%"
        },
        {
            name: "cover",
            code: "cover"
        },
        {
            name: "contain",
            code: "contain"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}