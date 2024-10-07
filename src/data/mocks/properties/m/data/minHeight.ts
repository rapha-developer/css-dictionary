import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const minHeightData: PropertyProps = {
    name: "min height",
    definition: "A propriedade min-height define a altura mínima de um elemento. Se o conteúdo for menor que a altura mínima, a altura mínima será aplicada. Se o conteúdo for maior que a altura mínima, a propriedade min-height não terá efeito.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "O valor padrão é 0. Define a altura mínima em px, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a altura mínima em porcentagem do bloco que contém"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "30px",
            code: "30px"
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
            name: "150px",
            code: "150px"
        },
        {
            name: "25%",
            code: "25%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}