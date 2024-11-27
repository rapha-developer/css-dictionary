import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const userSelectData: PropertyProps = {
    name: "user select",
    definition: "A propriedade user-select especifica se o texto de um elemento pode ser selecionado. Em navegadores da web, se você clicar duas vezes em algum texto, ele será selecionado/destacado. Esta propriedade pode ser usada para evitar isso.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O texto pode ser selecionado se o navegador permitir"
        },
        {
            name: "none",
            value: "Impedir seleção de texto"
        },
        {
            name: "text",
            value: "O texto pode ser selecionado pelo usuário"
        },
        {
            name: "all",
            value: "A seleção de texto é feita com um clique em vez de um clique duplo"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "none",
            code: "none"
        },
        {
            name: "text",
            code: "text"
        },
        {
            name: "all",
            code: "all"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}