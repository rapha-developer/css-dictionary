import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const topData: PropertyProps = {
    name: "top",
    definition: "A propriedade top afeta a posição vertical de um elemento posicionado. Esta propriedade não tem efeito em elementos não posicionados.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Permite que o navegador calcule a posição da borda superior. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a posição da borda superior em px, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a posição da borda superior em % do elemento que a contém. Valores negativos são permitidos"
        },
        {
            name: "Observação: ",
            value: "Se posição: absoluta; ou posição: fixa; ➤ a propriedade top define a borda superior de um elemento como uma unidade acima/abaixo da borda superior do seu ancestral posicionado mais próximo."
        },
        {
            name: "Observação: ",
            value: "Se posição: relativa; ➤ a propriedade top faz com que a borda superior do elemento se mova acima/abaixo de sua posição normal."
        },
        {
            name: "Observação: ",
            value: "Se position: sticky; ➤ a propriedade top se comporta como se sua posição fosse relativa quando o elemento está dentro da janela de visualização, e como se sua posição fosse fixa quando está fora."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
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
            name: "-100px",
            code: "-100px"
        },
        {
            name: "10%",
            code: "10%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}