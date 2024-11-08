import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const rightData: PropertyProps = {
    name: "right",
    definition: "A propriedade right afeta a posição horizontal de um elemento posicionado. Esta propriedade não tem efeito em elementos não posicionados.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Permite que o navegador calcule a posição da borda direita. Este é o padrão"
        },
        {
            name: "length",
            value: "Define a posição da borda direita em px, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define a posição da borda direita em % do elemento que a contém. Valores negativos são permitidos."
        },
        {
            name: "Observação:",
            value: "Se posição: absolute; ou posição: fixed ➤ a propriedade direita define a aresta direita de um elemento como uma unidade à direita da aresta direita do seu ancestral posicionado mais próximo."
        },
        {
            name: "Observação:",
            value: "Se posição: relative ➤ a propriedade direita define a borda direita de um elemento como uma unidade à esquerda/direita de sua posição normal."
        },
        {
            name: "Observação:",
            value: "Se position: sticky ➤ a propriedade correta se comporta como se sua posição fosse relativa quando o elemento está dentro da janela de visualização, e como se sua posição fosse fixa quando está fora."
        },
        {
            name: "Observação:",
            value: "Se posição: static ➤ a propriedade correta não tem efeito"
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
            name: "10%",
            code: "10%"
        },
        {
            name: "-50px",
            code: "-50px"
        },
        {
            name: "-100px",
            code: "-100px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}