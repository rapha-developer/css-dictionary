import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const displayData: PropertyProps = {
    name: "display",
    definition: "A propriedade display especifica o comportamento de exibição (o tipo de caixa de renderização) de um elemento.",
    category: "css property",
    values: [
        {
            name: "inline",
            value: "Exibe um elemento como um elemento embutido (como <span>). Quaisquer propriedades de altura e largura não terão efeito. Este é o padrão."
        },
        {
            name: "block",
            value: "Exibe um elemento como um elemento embutido (como <span>). Quaisquer propriedades de altura e largura não terão efeito. Este é o padrão."
        },
        {
            name: "contents",
            value: "Faz o contêiner desaparecer, tornando os elementos filhos filhos do elemento no próximo nível acima no DOM"
        },
        {
            name: "flex",
            value: "Exibe um elemento como um flex container em nível de bloco"
        },
        {
            name: "grid",
            value: "Exibe um elemento como um contêiner de grade em nível de bloco"
        },
        {
            name: "inline-block",
            value: "Exibe um elemento como um contêiner de bloco de nível embutido (inline-block). O elemento em si é formatado como um elemento embutido (inline), mas você pode aplicar valores de altura e largura"
        },
        {
            name: "inline-flex",
            value: "Exibe um elemento como um flex container de nível inline"
        },
        {
            name: "inline-grid",
            value: "Exibe um elemento como um contêiner de grade de nível embutido (inline)"
        },
        {
            name: "inline-table",
            value: "O elemento é exibido como uma tabela de nível embutido"
        },
        {
            name: "list-item",
            value: "Deixe o elemento se comportar como um elemento <li>"
        },
        {
            name: "run-in",
            value: "Exibe um elemento como bloco ou embutido, dependendo do contexto"
        },
        {
            name: "table",
            value: "Deixe o elemento se comportar como um elemento <table>"
        },
        {
            name: "table-caption",
            value: "Deixe o elemento se comportar como um elemento <caption>"
        },
        {
            name: "table-column-group",
            value: "Deixe o elemento se comportar como um elemento <colgroup>"
        },
        {
            name: "table-header-group",
            value: "Deixe o elemento se comportar como um elemento <thead>"
        },
        {
            name: "table-footer-group",
            value: "Deixe o elemento se comportar como um elemento <tfoot>"
        },
        {
            name: "table-row-group",
            value: "Deixe o elemento se comportar como um elemento <tbody>"
        },
        {
            name: "table-cell",
            value: "Deixe o elemento se comportar como um elemento <td>"
        },
        {
            name: "table-column",
            value: "Deixe o elemento se comportar como um elemento <col>"
        },
        {
            name: "table-row",
            value: "Deixe o elemento se comportar como um elemento <tr>"
        },
        genericPropertyValuesData.inherit,
        genericPropertyValuesData.initial
    ],
    examples: [
        {
            name: "inline",
            code: "inline"
        },
        {
            name: "block",
            code: "block"
        },
        {
            name: "contents",
            code: "contents"
        },
        {
            name: "flex",
            code: "flex"
        },
        {
            name: "grid",
            code: "grid"
        },
        {
            name: "inline-block",
            code: "inline-block"
        },
        {
            name: "inline-flex",
            code: "inline-flex"
        },
        {
            name: "inline-grid",
            code: "inline-grid"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}