import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const objectPositionData: PropertyProps = {
    name: "object position",
    definition: "A propriedade object-position é usada junto com object-fit para especificar como um <img> ou <video> deve ser posicionado com coordenadas x/y dentro de sua 'própria caixa de conteúdo'.",
    category: "css property",
    values: [
        {
            name: "position",
            value: "Especifica a posição da imagem ou vídeo dentro de sua caixa de conteúdo. O primeiro valor controla o eixo x e o segundo valor controla o eixo y. Pode ser uma string (esquerda, centro ou direita) ou um número (em px ou %). Valores negativos são permitidos"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0% 0%",
            code: "0% 0%"
        },
        {
            name: "30% 0%",
            code: "30% 0%"
        },
        {
            name: "60% 0%",
            code: "60% 0%"
        },
        {
            name: "100% 100%",
            code: "100% 100%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}