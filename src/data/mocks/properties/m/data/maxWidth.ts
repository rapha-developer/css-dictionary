import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const maxWidthData: PropertyProps = {
    name: "max width",
    definition: "A propriedade max-width define a largura máxima de um elemento. Se o conteúdo for maior que a largura máxima, ele mudará automaticamente a altura do elemento. Se o conteúdo for menor que a largura máxima, a propriedade max-width não terá efeito.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Sem largura máxima. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a largura máxima em px, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a largura máxima em porcentagem do bloco que o contém"
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
            name: "100px",
            code: "100px"
        },
        {
            name: "150px",
            code: "150px"
        },
        {
            name: "40%",
            code: "40%"
        },
        {
            name: "60%",
            code: "60%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}