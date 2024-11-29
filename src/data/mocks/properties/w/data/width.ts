import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const widthData: PropertyProps = {
    name: "width",
    definition: "A propriedade width define a largura de um elemento. A largura de um elemento não inclui preenchimento, bordas ou margens!",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O navegador calcula a largura."
        },
        {
            name: "length",
            value: "Define a largura em px, cm, etc. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a largura em porcentagem do bloco que o contém."
        },
        {
            name: "Observação: ",
            value: "As propriedades min-width e max-width substituem a propriedade width."
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
            name: "150px",
            code: "150px"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}