import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const filterData: PropertyProps = {
    name: "filter",
    definition: "A propriedade do filtro define efeitos visuais (como desfoque e saturação) para um elemento (geralmente <img>)",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Nenhum filtro é aplicado ao pano de fundo"
        },
        {
            name: "blur()",
            value: "Aplica um efeito de desfoque à imagem. Um valor maior criará mais desfoque. Se nenhum valor for especificado, 0 será usado"
        },
        {
            name: "brightness()",
            value: "Ajusta o brilho da imagem. 0% deixará a imagem completamente preta. 100% (1) é o padrão e representa a imagem original. Valores acima de 100% fornecerão resultados mais brilhantes."
        },
        {
            name: "contrast()",
            value: "Ajusta o contraste da imagem. 0% deixará a imagem completamente preta. 100% (1) é o padrão e representa a imagem original. Valores acima de 100% fornecerão resultados com mais contraste."
        },
        {
            name: "drop-shadow()",
            value: "Aplica um efeito de sombra projetada à imagem."
        },
        {
            name: "grayscale()",
            value: "Converte a imagem para tons de cinza. 0% (0) é o padrão e representa a imagem original. 100% tornará a imagem completamente cinza (usado para imagens em preto e branco)."
        },
        {
            name: "hue-rotate()",
            value: "Aplica uma rotação de matiz na imagem. O valor define o número de graus ao redor do círculo de cores em que as amostras de imagem serão ajustadas. 0deg é o padrão e representa a imagem original."
        },
        {
            name: "invert()",
            value: "Inverte as amostras na imagem. 0% (0) é o padrão e representa a imagem original. 100% fará com que a imagem fique completamente invertida."
        },
        {
            name: "opacity()",
            value: "Define o nível de opacidade para a imagem. O nível de opacidade descreve o nível de transparência, onde: 0% é completamente transparente. 100% (1) é o padrão e representa a imagem original (sem transparência)."
        },
        {
            name: "saturate()",
            value: "Satura a imagem. 0% (0) tornará a imagem completamente não saturada. 100% é o padrão e representa a imagem original. Valores acima de 100% fornecem resultados supersaturados."
        },
        {
            name: "sepia()",
            value: "Converte a imagem para sépia. 0% (0) é o padrão e representa a imagem original. 100% tornará a imagem completamente sépia."
        },
        {
            name: "url() etc:",
            value: "ou uma URL para um filtro SVG que será aplicado ao backdrop (cenário)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "blur(10px)",
            code: "blur(10px)"
        },
        {
            name: "brightness(60%)",
            code: "brightness(60%)"
        },
        {
            name: "contrast(180%)",
            code: "contrast(180%)"
        },
        {
            name: "grayscale(100%)",
            code: "grayscale(100%)"
        },
        {
            name: "hue-rotate(180deg)",
            code: "hue-rotate(180deg)"
        },
        {
            name: "invert(80%)",
            code: "invert(80%)"
        },
        {
            name: "opacity(40%)",
            code: "opacity(40%)"
        },
        {
            name: "saturate(7)",
            code: "saturate(7)"
        },
        {
            name: "sepia(100%)",
            code: "sepia(100%)"
        },
        {
            name: "drop-shadow(8px 8px 10px green)",
            code: "drop-shadow(8px 8px 10px green)"
        },
        {
            name: "none",
            code: "none"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}