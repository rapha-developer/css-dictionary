import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const positionData: PropertyProps = {
    name: "position",
    definition: "A propriedade de posição especifica o tipo de método de posicionamento usado para um elemento (estático (static), relativo (relative), absoluto (absolute), fixo (fixed) ou pegajoso (sticky)).",
    category: "css property",
    values: [
        {
            name: "static",
            value: "Valor padrão. Elementos renderizam em ordem, como aparecem no fluxo de documentos"
        },
        {
            name: "absolute",
            value: "O elemento está posicionado em relação ao seu primeiro elemento ancestral posicionado (não estático)"
        },
        {
            name: "fixed",
            value: "O elemento está posicionado em relação à janela do navegador"
        },
        {
            name: "relative",
            value: "O elemento está posicionado em relação à sua posição normal; portanto, 'esquerda: 20px' adiciona 20 pixels à posição esquerda do elemento"
        },
        {
            name: "sticky",
            value: "O elemento está posicionado com base na posição de rolagem do usuário. Um elemento pegajoso alterna entre parente e fixo, dependendo da posição de rolagem. Ele está posicionado em relação até que uma determinada posição de deslocamento seja atendida na viewport - então ele 'bata' no lugar (como a posição: fixed)."
        },
        {
            name: "NOTA:",
            value: "Sticky não é suportado no IE/Edge 15 ou anterior. Suportado no Safari a partir da versão 6.1 com um prefixo -webkit-."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "static",
            code: "static"
        },
        {
            name: "absolute",
            code: "absolute"
        },
        {
            name: "fixed",
            code: "fixed"
        },
        {
            name: "relative",
            code: "relative"
        },
        {
            name: "sticky",
            code: "sticky"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}