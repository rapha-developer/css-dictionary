import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const objectFitData: PropertyProps = {
    name: "object fit",
    definition: "A propriedade object-fit é usada para especificar como um <img> ou <video> deve ser redimensionado para caber em seu contêiner. Esta propriedade diz ao conteúdo para preencher o contêiner de várias maneiras; como 'preservar essa proporção' ou 'esticar e ocupar o máximo de espaço possível'.",
    category: "css property",
    values: [
        {
            name: "fill",
            value: "Este é o padrão. O conteúdo substituído é dimensionado para preencher a caixa de conteúdo do elemento. Se necessário, o objeto será esticado ou espremido para caber"
        },
        {
            name: "contain",
            value: "Esta propriedade diz ao conteúdo para preencher o contêiner de várias maneiras; como 'preservar essa proporção' ou 'esticar e ocupar o máximo de espaço possível'."
        },
        {
            name: "cover",
            value: "O conteúdo substituído é dimensionado para manter sua proporção de aspecto enquanto preenche toda a caixa de conteúdo do elemento. O objeto será recortado para caber"
        },
        {
            name: "none",
            value: "O conteúdo substituído não é redimensionado"
        },
        {
            name: "scale-down",
            value: "O conteúdo é dimensionado como se none ou contain fossem especificados (resultaria em um tamanho de objeto concreto menor)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "fill",
            code: "fill"
        },
        {
            name: "contain",
            code: "contain"
        },
        {
            name: "cover",
            code: "cover"
        },
        {
            name: "scale-down",
            code: "scale-down"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}