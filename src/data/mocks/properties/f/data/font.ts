import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontData: PropertyProps = {
    name: "font",
    definition: "A propriedade font é uma propriedade abreviada para: font-style, font-variant, font-weight, font-size/line-height e font-family. Os valores font-size e font-family são obrigatórios. Se um dos outros valores estiver faltando, seus valores padrão serão usados.",
    category: "css property",
    values: [
        {
            name: "font-style",
            value: "Especifica o estilo da fonte. O valor padrão é 'normal'"
        },
        {
            name: "font-variant",
            value: "Especifica a variante da fonte. O valor padrão é 'normal'"
        },
        {
            name: "font-weight",
            value: "Especifica o peso da fonte. O valor padrão é 'normal'"
        },
        {
            name: "font-size/line-height",
            value: "Especifica o tamanho da fonte e a altura da linha. O valor padrão é 'normal'"
        },
        {
            name: "font-family",
            value: "Especifica a família da fonte. O valor padrão depende do navegador"
        },
        {
            name: "caption",
            value: "Usa a fonte usada pelos controles legendados (como botões, menus suspensos, etc.)"
        },
        {
            name: "icon",
            value: "Usa a fonte usada pelos rótulos dos ícones"
        },
        {
            name: "menu",
            value: "Usa as fontes que são usadas pelos menus suspensos"
        },
        {
            name: "message-box",
            value: "Usa as fontes que são usadas pelas caixas de diálogo"
        },
        {
            name: "small-caption",
            value: "Uma versão menor da fonte da legenda"
        },
        {
            name: "status-bar",
            value: "Usa as fontes que são usadas pela barra de status"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "15px outfit",
            code: "15px 'Outfit'"
        },
        {
            name: "15px sans",
            code: "15px sans-serif"
        },
        {
            name: "15px mono",
            code: "15px monospace"
        },
        {
            name: "15px mono italic",
            code: "italic 15px monospace"
        },
        {
            name: "15px mono italic bold",
            code: "italic bold 15px monospace"
        },
        {
            name: "24px mono",
            code: "24px monospace"
        },
        {
            name: "small 15px mono",
            code: "small-caps 15px ui-monospace"
        },
        {
            name: "small bold italic 12px",
            code: "italic small-caps bold 12px/30px sans-serif"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}