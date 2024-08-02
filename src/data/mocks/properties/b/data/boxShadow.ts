import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const boxShadowData: PropertyProps = {
    name: "box shadow",
    definition: "A propriedade box-shadow anexa uma ou mais sombras a um elemento.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Nenhuma sombra é exibida"
        },
        {
            name: "h-offset",
            value: "Obrigatório. O deslocamento horizontal da sombra. Um valor positivo coloca a sombra no lado direito da caixa, um valor negativo coloca a sombra no lado esquerdo da caixa"
        },
        {
            name: "v-offset",
            value: "Obrigatório. O deslocamento vertical da sombra. Um valor positivo coloca a sombra abaixo da caixa, um valor negativo coloca a sombra acima da caixa"
        },
        {
            name: "blur",
            value: "Opcional. O raio de desfoque. Quanto maior o número, mais desfocada será a sombra"
        },
        {
            name: "spread",
            value: "Opcional. O raio de espalhamento. Um valor positivo aumenta o tamanho da sombra, um valor negativo diminui o tamanho da sombra"
        },
        {
            name: "color",
            value: "Opcional. A cor da sombra. O valor padrão é a cor do texto. Veja CSS Color Values ​​para uma lista completa de possíveis valores de cor no glossário"
        },
        {
            name: "inset",
            value: "Opcional. Altera a sombra de uma sombra externa (início) para uma sombra interna"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "*** 10px grey",
            code: "10px 10px grey"
        },
        {
            name: "*** grey",
            code: "50px 50px grey"
        },
        {
            name: "*** 50px grey",
            code: "20px 20px 50px grey"
        },
        {
            name: "*** 15px grey",
            code: "20px 20px 50px 15px grey"
        },
        {
            name: "*** 10px red",
            code: "20px 20px 20px 10px red"
        },
        {
            name: "*** 10px blue",
            code: "20px 20px 20px 10px blue"
        },
        {
            name: "*** pink inset",
            code: "20px 20px 50px 10px pink inset"
        },
        {
            name: "none",
            code: "none"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}