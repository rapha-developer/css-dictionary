import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderImageData: PropertyProps = {
    name: "border image",
    definition: "A propriedade border-image permite que você especifique uma imagem a ser usada como borda ao redor de um elemento. Esta é uma propriedade abreviada para: <border-image-source>, <border-image-slice>, <border-image-width>, <border-image-outset> e <border-image-repeat>",
    category: "css property",
    values: [
        {
            name: "<border-image-source>",
            value: "O caminho para a imagem a ser usada como borda"
        },
        {
            name: "<border-image-slice>",
            value: "Como fatiar a imagem da borda"
        },
        {
            name: "<border-image-width>",
            value: "A largura da imagem da borda"
        },
        {
            name: "<border-image-outset>",
            value: "A quantidade pela qual a área da imagem da borda se estende além da caixa da borda"
        },
        {
            name: "<border-image-repeat>",
            value: "Se a imagem da borda deve ser repetida, arredondada ou esticada"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "url(border.png) 30 round",
            code: "30 round"
        },
        {
            name: "url(border.png) 20 25 repeat",
            code: "20 25 repeat"
        },
        {
            name: "url(border.png) 10% 20% stretch",
            code: "10% 20% stretch"
        },
        {
            name: "url(border.png) 10% fill space",
            code: "10% fill space"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}