import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const clipPathData: PropertyProps = {
    name: "clip path",
    definition: "A propriedade clip-path permite recortar um elemento em uma forma básica ou em uma fonte SVG",
    category: "css property",
    values: [
        {
            name: "clip-source",
            value: "Define uma URL para um elemento SVG <clipPath>"
        },
        {
            name: "basic-shape",
            value: "Recorta um elemento em uma forma básica: círculo, elipse, polígono ou inserção"
        },
        {
            name: "margin-box",
            value: "Uses the margin box as the reference box"
        },
        {
            name: "border-box",
            value: "Usa a caixa de borda como caixa de referência"
        },
        {
            name: "padding-box",
            value: "Usa a caixa de preenchimento como caixa de referência"
        },
        {
            name: "content-box",
            value: "Usa a caixa de conteúdo como caixa de referência"
        },
        {
            name: "fill-box",
            value: "Usa a caixa delimitadora do objeto como caixa de referência"
        },
        {
            name: "stroke-box",
            value: "Usa a caixa delimitadora de traço como caixa de referência"
        },
        {
            name: "view-box",
            value: "Usa a janela de visualização SVG como caixa de referência"
        },
        {
            name: "none",
            value: "Este é o padrão. Nenhum recorte é feito"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "circle(40%)",
            code: "circle(40%)"
        },
        {
            name: "circle(20%)",
            code: "circle(20%)"
        },
        {
            name: "ellipse(**)",
            code: "ellipse(25% 40% at 50% 50%)"
        },
        {
            name: "ellipse(***)",
            code: "ellipse(25% 25% at 50% 50%)"
        },
        {
            name: "polygon(**)",
            code: "polygon(50% 0%, 0% 100%, 100% 100%)"
        },
        {
            name: "polygon(***)",
            code: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        },
        {
            name: "inset(**)",
            code: "inset(5% 20% 15% 10%)"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}