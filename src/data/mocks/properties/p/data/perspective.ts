import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const perspectiveData: PropertyProps = {
    name: "perspective",
    definition: "A propriedade perspectiva é usada para dar alguma perspectiva a um elemento posicionado em 3D. A propriedade de perspectiva define o quão longe o objeto está do usuário. Então, um valor menor resultará em um efeito 3D mais intenso do que um valor maior. Ao definir a propriedade de perspectiva para um elemento, são os elementos FILHOS que obtêm a visualização em perspectiva, NÃO o elemento em si.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "A que distância o elemento é colocado da vista"
        },
        {
            name: "none",
            value: "Valor padrão. O mesmo que 0. A perspectiva não está definida"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "300px",
            code: "300px"
        },
        {
            name: "500px",
            code: "500px"
        },
        {
            name: "700px",
            code: "700px"
        },
        {
            name: "800px",
            code: "800px"
        },
        {
            name: "900px",
            code: "900px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}