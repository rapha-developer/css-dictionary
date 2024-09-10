import { PropertyProps } from "../../../../../types/PropertyProps";

export const imageRenderingData: PropertyProps = {
    name: "image rendering",
    definition: "A propriedade image-rendering especifica o tipo de algoritmo a ser usado para dimensionamento de imagem. Observação: esta propriedade não tem efeito em imagens que não são dimensionadas.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Deixe o navegador escolher o algoritmo de escala. Este é o padrão"
        },
        {
            name: "smooth",
            value: "Use um algoritmo que suavize as cores na imagem"
        },
        {
            name: "high-quality",
            value: "O mesmo que smooth, mas com preferência por escala de qualidade mais alta"
        },
        {
            name: "crisp-edges",
            value: "Use um algoritmo que preservará o contraste e as bordas na imagem"
        },
        {
            name: "pixelated",
            value: "Se a imagem for ampliada, o algoritmo vizinho mais próximo será usado, então a imagem aparecerá como sendo composta de pixels grandes. Se a imagem for reduzida, será o mesmo que auto"
        },
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "crisp-edges",
            code: "crisp-edges"
        },
        {
            name: "pixelated",
            code: "pixelated"
        },
    ]
}