import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const bottomData: PropertyProps = {
    name: "bottom",
    definition: "A propriedade bottom afeta a posição vertical de um elemento posicionado. Esta propriedade não tem efeito em elementos não posicionados.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Permite que o navegador calcule a posição da borda inferior. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a posição da borda inferior em px, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a posição da borda inferior em % do elemento que a contém. Valores negativos são permitidos."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit,
        {
            name: "(se) position: absolute or fixed;",
            value: "a propriedade inferior define a borda inferior de um elemento como uma unidade acima/abaixo da borda inferior do seu ancestral posicionado mais próximo."
        },
        {
            name: "(se) position: relative;",
            value: "a propriedade inferior faz com que a borda inferior do elemento se mova acima/abaixo de sua posição normal."
        },
        {
            name: "(se) position: sticky;",
            value: "a propriedade bottom se comporta como se sua posição fosse relativa quando o elemento está dentro da janela de visualização (viewport), e como se sua posição fosse fixa quando está fora."
        },
        {
            name: "(se) position: static;",
            value: "a propriedade bottom não tem efeito."
        },
    ],
    examples: [
        {
            name: "0px",
            code: "0px"
        },
        {
            name: "25px",
            code: "25px"
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
            name: "-25px",
            code: "-25px"
        },
        {
            name: "-50px",
            code: "-50px"
        },
        {
            name: "50%",
            code: "50%"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}