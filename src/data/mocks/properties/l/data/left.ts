import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const leftData: PropertyProps = {
    name: "left",
    definition: "A propriedade left afeta a posição horizontal de um elemento posicionado. Esta propriedade não tem efeito em elementos não posicionados.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Permite que o navegador calcule a posição da borda esquerda. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a posição da borda esquerda em px, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Define a posição da borda esquerda em % do elemento que a contém. Valores negativos são permitidos"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit,
        {
            name: "Se posição: absoluta; ou posição: fixa;",
            value: "A propriedade esquerda define a borda esquerda de um elemento como uma unidade à esquerda da borda esquerda de seu ancestral posicionado mais próximo."
        },
        {
            name: "Se posição: relativa;",
            value: "A propriedade esquerda define a borda esquerda de um elemento como uma unidade à esquerda/direita de sua posição normal."
        },
        {
            name: "Se position: sticky",
            value: "A propriedade esquerda se comporta como se sua posição fosse relativa quando o elemento está dentro da janela de visualização, e como se sua posição fosse fixa quando está fora."
        },
        {
            name: "Se posição: estático;",
            value: "A propriedade esquerda não tem efeito."
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
            name: "10%",
            code: "10%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}