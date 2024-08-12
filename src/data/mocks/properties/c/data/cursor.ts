import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const cursorData: PropertyProps = {
    name: "cursor",
    definition: "A propriedade cursor especifica o cursor do mouse a ser exibido ao apontar sobre um elemento.",
    category: "css property",
    values: [
        {
            name: "alias",
            value: "O cursor indica que um alias de algo deve ser criado"
        },
        {
            name: "all-scroll",
            value: "O cursor indica que algo pode ser rolado em qualquer direção"
        },
        {
            name: "auto",
            value: "Padrão. O navegador define um cursor"
        },
        {
            name: "cell",
            value: "O cursor indica que uma célula (ou conjunto de células) pode ser selecionada"
        },
        {
            name: "col-resize",
            value: "O cursor indica que a coluna pode ser redimensionada horizontalmente"
        },
        {
            name: "context-menu",
            value: "O cursor indica que um menu de contexto está disponível"
        },
        {
            name: "copy",
            value: "O cursor indica que algo deve ser copiado"
        },
        {
            name: "crosshair",
            value: "O cursor é renderizado como um crosshair"
        },
        {
            name: "e-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para a direita (leste)"
        },
        {
            name: "ew-resize",
            value: "Indica um cursor de redimensionamento bidirecional"
        },
        {
            name: "grab",
            value: "O cursor indica que algo pode ser agarrado"
        },
        {
            name: "grabbing",
            value: "O cursor indica que algo pode ser agarrado"
        },
        {
            name: "help",
            value: "O cursor indica que a ajuda está disponível"
        },
        {
            name: "move",
            value: "O cursor indica que algo deve ser movido"
        },
        {
            name: "n-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para cima (norte)"
        },
        {
            name: "ne-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para cima e para a direita (norte/leste)"
        },
        {
            name: "nwse-resize",
            value: "Indica um cursor de redimensionamento bidirecional"
        },
        {
            name: "ns-resize",
            value: "Indica um cursor de redimensionamento bidirecional"
        },
        {
            name: "nw-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para cima e para a esquerda (norte/oeste)"
        },
        {
            name: "no-drop",
            value: "O cursor indica que o item arrastado não pode ser solto aqui"
        },
        {
            name: "none",
            value: "Nenhum cursor é renderizado para o elemento"
        },
        {
            name: "not-allowed",
            value: "O cursor indica que a ação solicitada não será executada"
        },
        {
            name: "pointer",
            value: "O cursor é um ponteiro e indica um link"
        },
        {
            name: "progress",
            value: "O cursor indica que o programa está ocupado (em andamento)"
        },
        {
            name: "row-resize",
            value: "O cursor indica que a linha pode ser redimensionada verticalmente"
        },
        {
            name: "s-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para baixo (sul)"
        },
        {
            name: "se-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para baixo e para a direita (sul/leste)"
        },
        {
            name: "sw-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para baixo e para a esquerda (sul/oeste)"
        },
        {
            name: "text",
            value: "O cursor indica o texto que pode ser selecionado"
        },
        {
            name: "URL",
            value: "Uma lista separada por vírgulas de URLs para cursores personalizados. Nota: Sempre especifique um cursor genérico no final da lista, caso nenhum dos cursores definidos por URL possa ser usado"
        },
        {
            name: "vertical-text",
            value: "O cursor indica vertical-text (texto vertical) que pode ser selecionado"
        },
        {
            name: "w-resize",
            value: "O cursor indica que uma borda de uma caixa deve ser movida para a esquerda (oeste)"
        },
        {
            name: "wait",
            value: "O cursor indica que o programa está ocupado"
        },
        {
            name: "zoom-in",
            value: "O cursor indica que algo pode ser ampliado"
        },
        {
            name: "zoom-out",
            value: "O cursor indica que algo pode ser reduzido"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "all-scroll",
            code: "all-scroll"
        },
        {
            name: "copy",
            code: "copy"
        },
        {
            name: "help",
            code: "help"
        },
        {
            name: "move",
            code: "move"
        },
        {
            name: "not-allowed",
            code: "not-allowed"
        },
        {
            name: "pointer",
            code: "pointer"
        },
        {
            name: "zoom-in",
            code: "zoom-in"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
