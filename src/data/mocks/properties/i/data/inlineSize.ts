import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const inlineSizeData: PropertyProps = {
    name: "inline size",
    definition: "A propriedade inline-size especifica o tamanho de um elemento na direção inline. Nota: A propriedade CSS relacionada modo de escrita define a direção inline e isso afeta o resultado da propriedade inline-size. Para páginas em inglês, a direção embutida é da esquerda para a direita e a direção do bloco é para baixo. As propriedades CSS inline-size e block-size são muito semelhantes às propriedades CSS width e height, mas as propriedades inline-size e block-size dependem das direções inline e do bloco.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor de tamanho embutido padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica o tamanho embutido em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Especifica o tamanho embutido em porcentagem em relação ao tamanho do elemento pai no eixo correspondente."
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
            name: "100px",
            code: "100px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "80%",
            code: "80%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}