import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const justifyItemsData: PropertyProps = {
    name: "justify items",
    definition: "A propriedade justify-items é definida no contêiner da grade para dar aos elementos filho (itens da grade) alinhamento na direção inline. Para páginas em inglês, a direção em linha (inline direction) é da esquerda para a direita e a direção do bloco é para baixo. Para que essa propriedade tenha algum efeito de alinhamento, os itens da grade precisam de espaço disponível ao redor deles na direção em linha.",
    category: "css property",
    values: [
        {
            name: "legacy",
            value: "Valor padrão. Itens de grade com valor justify-self 'auto' herdam somente o valor da propriedade justify-items do contêiner de grade se ele começar com 'legacy'. Ele existe para implementar o comportamento de alinhamento legado do elemento 〈center〉 do HTML e do atributo align."
        },
        {
            name: "normal",
            value: "Depende do contexto do layout, mas é semelhante a 'stretch' para layout de grade"
        },
        {
            name: "stretch",
            value: "Estende-se para preencher a célula da grade se o tamanho da linha (largura) não estiver definido."
        },
        {
            name: "start",
            value: "Alinhar itens no início na direção inline"
        },
        {
            name: "left",
            value: "Alinhar itens à esquerda"
        },
        {
            name: "center",
            value: "Alinhar itens ao centro"
        },
        {
            name: "end",
            value: "Alinhar itens no final na direção inline"
        },
        {
            name: "right",
            value: "Alinhar itens à direita"
        },
        {
            name: "overflow-alignment",
            value: "◉ 'safe' define o alinhamento do item para 'start' se o conteúdo estourar (overflows). ⟺ ⟺ ⟺ ◉ 'unsafe' mantém o valor de alinhamento independentemente de o conteúdo do item estourar ou não"
        },
        {
            name: "baseline alignment",
            value: "O elemento está alinhado com a linha de base do pai"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "legacy",
            code: "legacy"
        },
        {
            name: "left",
            code: "left"
        },
        {
            name: "stretch",
            code: "stretch"
        },
        {
            name: "right",
            code: "right"
        },
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "center",
            code: "center"
        },
        {
            name: "end",
            code: "end"
        },
        {
            name: "start",
            code: "start"
        },
        {
            name: "flex-end",
            code: "flex-end"
        },
        {
            name: "flex-start",
            code: "flex-start"
        },
        {
            name: "last baseline",
            code: "last baseline"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}