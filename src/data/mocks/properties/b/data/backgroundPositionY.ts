import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundPositionYData: PropertyProps = {
    name: "background position y",
    definition: "A propriedade background-position-y define a posição de uma imagem de fundo no eixo y.",
    category: "css property",
    values: [
        {
            name: "top",
            value: "Posiciona a parte superior do plano de fundo no eixo y."
        },
        {
            name: "bottom",
            value: "Posiciona a parte inferior do fundo no eixo y."
        },
        {
            name: "center",
            value: "Posiciona o centro do plano de fundo no eixo y."
        },
        {
            name: "y%",
            value: "O lado superior é 0% no eixo y e o lado inferior é 100%. O valor percentual refere-se à altura da área de posicionamento do plano de fundo menos a altura da imagem de plano de fundo."
        },
        {
            name: "ypos",
            value: "Distância vertical do lado superior. As unidades podem ser pixels (0px) ou qualquer outra unidade CSS."
        },
        {
            name: "ypos offset",
            value: 'Sintaxe de dois valores, compatível apenas com Firefox e Safari. - ypos está definido como "superior" ou "inferior". - offset é a distância vertical da imagem de fundo e do lado "superior" ou "inferior" definido com ypos. As unidades podem ser pixels ou quaisquer outras unidades CSS.'
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "top",
            code: "top"
        },
        {
            name: "bottom",
            code: "bottom"
        },
        {
            name: "center",
            code: "center"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "30%",
            code: "30%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}