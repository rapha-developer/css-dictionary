import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundData: PropertyProps = {
    name: "background",
    definition: "A propriedade background é um atalho para definir os valores de fundo individuais em um único lugar na folha de estilo. É uma abreviada para: background-color, background-image, background-position, background-size, background-repeat, background-origin, background-clip & background-attachment.",
    category: "css property",
    values: [
        {
            name: "<color> <image> <position/size> <repeat> <origin> <clip> <attachment>",
            value: "Específica cor, imagem, posição da imagem/tamanho da imagem, repetição da imagem, área de posicionamento, área de borda, se as imagens são fixas ou rolam com a página"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "blueviolet",
            code: "blueviolet"
        },
        {
            name: "turquoise",
            code: "turquoise"
        },
        {
            name: "image",
            code: "no-repeat 0% 0% / cover url('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9')"
        },
        {
            name: "loading",
            code: "no-repeat 0% 0% / cover url('https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif')"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}