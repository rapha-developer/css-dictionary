import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const maxHeightData: PropertyProps = {
    name: "max height",
    definition: "A propriedade max-height define a altura máxima de um elemento. Se o conteúdo for maior que a altura máxima, ele irá estourar. Como o contêiner irá lidar com o conteúdo estourado é definido pela propriedade overflow. Se o conteúdo for menor que a altura máxima, a propriedade max-height não terá efeito.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Sem altura máxima. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a altura máxima em px, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a altura máxima em porcentagem do bloco que o contém"
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
            name: "50px",
            code: "50px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "25%",
            code: "25%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}