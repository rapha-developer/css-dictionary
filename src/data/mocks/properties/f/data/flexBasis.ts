import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexBasisData: PropertyProps = {
    name: "flex basis",
    definition: "A propriedade flex-basis especifica o comprimento inicial de um item flexível. Se o elemento não for um item flexível, flex-basis não terá nenhum efeito.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "Uma unidade de comprimento, ou porcentagem, especificando o comprimento inicial do(s) item(ns) flexível(is)"
        },
        {
            name: "auto",
            value: "Valor padrão. O comprimento é igual ao comprimento do item flexível. Se o item não tiver comprimento especificado, o comprimento será de acordo com seu conteúdo"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "50px",
            code: "50px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "150px",
            code: "150px"
        },
        {
            name: "200px",
            code: "200px"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}