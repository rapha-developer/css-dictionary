import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const justifySelfData: PropertyProps = {
    name: "justify self",
    definition: "A propriedade justify-self alinha um item de grade dentro de sua célula de grade na direção inline. Para páginas em inglês, a direção em linha é da esquerda para a direita e a direção do bloco é para baixo. Para que essa propriedade tenha algum efeito de alinhamento, o item da grade precisa de espaço disponível ao seu redor na direção inline.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O valor da propriedade justify-self do contêiner de grade é herdado."
        },
        {
            name: "normal",
            value: "Depende do contexto do layout, mas semelhante a 'stretch' para layout de grade para itens de grade quando o tamanho não está definido. Se o tamanho estiver definido, o valor da propriedade se comporta como 'start'."
        },
        {
            name: "stretch",
            value: "Estica para preencher a célula da grade se o tamanho em linha (largura) não estiver definido."
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
            value: "◉ 'safe' define o alinhamento do item para 'start' se o conteúdo estourar ⟺ ⟺ ⟺ ⟺ ⟺ ◉ 'unsafe' mantém o valor de alinhamento independentemente de o conteúdo do item estourar ou não"
        },
        {
            name: "baseline alignment",
            value: "O elemento é alinhado com a linha de base do pai."
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
            name: "start",
            code: "start"
        },
        {
            name: "end",
            code: "end"
        },
        {
            name: "center",
            code: "center"
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