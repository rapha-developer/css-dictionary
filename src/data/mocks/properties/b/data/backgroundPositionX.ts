import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundPositionXData: PropertyProps = {
    name: "background position x",
    definition: "A propriedade background-position-x define a posição de uma imagem de fundo no eixo x",
    category: "css property",
    values: [
        {
            name: "left",
            value: "Posiciona o fundo do lado esquerdo no eixo x"
        },
        {
            name: "right",
            value: "Posiciona o lado direito do plano de fundo no eixo x."
        },
        {
            name: "center",
            value: "Posiciona o centro do plano de fundo no eixo x."
        },
        {
            name: "x%",
            value: "O lado esquerdo é 0% no eixo x e o lado direito é 100%. O valor percentual refere-se à largura da área de posicionamento do plano de fundo menos a largura da imagem de plano de fundo."
        },
        {
            name: "xpos",
            value: "Distância horizontal do lado esquerdo. As unidades podem ser pixels (0px) ou qualquer outra unidade CSS."
        },
        {
            name: "xpos offset",
            value: 'sintaxe de dois valores, compatível apenas com Firefox e Safari. - xpos está definido como "esquerda" ou "direita". - offset é a distância horizontal da imagem de fundo e do lado "esquerdo" ou "direito" definido com xpos. As unidades podem ser pixels ou quaisquer outras unidades CSS.'
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "left",
            code: "left"
        },
        {
            name: "right",
            code: "right"
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
            name: "60%",
            code: "60%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}