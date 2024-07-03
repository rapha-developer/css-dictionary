import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const alignItemsData: PropertyProps = {
    name: "align items",
    definition: "A propriedade align-items especifica o alinhamento padrão para itens dentro de um flexbox ou contêiner grid",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Comporta-se como 'stretch' para flexbox e itens grid, ou 'start' para itens grid com um tamanho de bloco definido."
        },
        {
            name: "stretch",
            value: "Os itens são esticados para caber no contêiner"
        },
        {
            name: "center",
            value: "Os itens são posicionados no centro do contêiner"
        },
        {
            name: "flex-start",
            value: "Os itens são posicionados no início do contêiner"
        },
        {
            name: "flex-end",
            value: "Os itens são posicionados no final do contêiner"
        },
        {
            name: "start",
            value: "Os itens são posicionados no início de suas células individuais do grid, na direção do bloco"
        },
        {
            name: "end",
            value: "Os itens são posicionados no final de suas células individuais do grid, na direção do bloco"
        },
        {
            name: "baseline",
            value: "Os itens são posicionados na linha de base do contêiner"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: `normal`
        },
        {
            name: "stretch",
            code: `stretch`
        },
        {
            name: "center",
            code: `center`
        },
        {
            name: "flex-start",
            code: `flex-start`
        },
        {
            name: "flex-end",
            code: `flex-end`
        },
        {
            name: "baseline",
            code: `baseline`
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
} 