import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundRepeatData: PropertyProps = {
    name: "background repeat",
    definition: "Define se/como uma imagem de fundo será repetida",
    category: "css property",
    values: [
        {
            name: "repeat",
            value: "A imagem de fundo é repetida vertical e horizontalmente. A última imagem será cortada se não couber. Este é o padrão"
        },
        {
            name: "repeat-x",
            value: "A imagem de fundo é repetida apenas horizontalmente"
        },
        {
            name: "repeat-y",
            value: "A imagem de fundo é repetida apenas verticalmente"
        },
        {
            name: "no-repeat",
            value: "A imagem de fundo não é repetida. A imagem só será mostrada uma vez"
        },
        {
            name: "space",
            value: "A imagem de fundo é repetida tanto quanto possível sem recorte. A primeira e a última imagem são fixadas em cada lado do elemento e os espaços em branco são distribuídos uniformemente entre as imagens"
        },
        {
            name: "round",
            value: "A imagem de fundo é repetida e comprimida ou esticada para preencher o espaço (sem lacunas)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "repeat",
            code: "repeat"
        },
        {
            name: "repeat-x",
            code: "repeat-x"
        },
        {
            name: "repeat-y",
            code: "repeat-y"
        },
        {
            name: "space",
            code: "space"
        },
        {
            name: "round",
            code: "round"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}