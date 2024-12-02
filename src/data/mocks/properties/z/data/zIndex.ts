import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const zIndexData: PropertyProps = {
    name: "z index",
    definition: "A propriedade z-index especifica a ordem de pilha de um elemento. Um elemento com maior ordem de pilha está sempre na frente de um elemento com menor ordem de pilha.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Define a ordem da pilha igual aos seus pais. Este é o padrão"
        },
        {
            name: "number",
            value: "Define a ordem da pilha do elemento. Números negativos são permitidos"
        },
        {
            name: "Observação: ",
            value: "Se dois elementos posicionados se sobrepuserem sem um z-index especificado, o elemento posicionado por último no código HTML será mostrado no topo."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "0",
            code: "0"
        },
        {
            name: "1",
            code: "1"
        },
        {
            name: "2",
            code: "2"
        },
        {
            name: "3",
            code: "3"
        },
        genericPropertyExamplesData.initial,
    ]
}