import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const heightData: PropertyProps = {
    name: "height",
    definition: "A propriedade height define a altura de um elemento. A altura de um elemento não inclui preenchimento, bordas ou margens! Se altura: auto; o elemento ajustará automaticamente sua altura para permitir que seu conteúdo seja exibido corretamente. Se a altura for definida como um valor numérico (como pixels, (r)em, porcentagens), então se o conteúdo não couber na altura especificada, ele irá estourar. Como o contêiner irá lidar com o conteúdo estourado é definido pela propriedade overflow.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "O navegador calcula a altura. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a altura em px, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a altura em porcentagem do bloco que o contém"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
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
            name: "50%",
            code: "50%"
        },
        {
            name: "80%",
            code: "80%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}