import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const minWidthData: PropertyProps = {
    name: "min width",
    definition: "A propriedade min-width define a largura mínima de um elemento. Se o conteúdo for menor que a largura mínima, a largura mínima será aplicada. Se o conteúdo for maior que a largura mínima, a propriedade min-width não tem efeito.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "O valor padrão é 0. Define a largura mínima em px, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a largura mínima em porcentagem do bloco que o contém"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
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
            name: "40%",
            code: "40%"
        },
        {
            name: "100%",
            code: "100%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}