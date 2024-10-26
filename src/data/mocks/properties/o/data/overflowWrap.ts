import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const overflowWrapData: PropertyProps = {
    name: "overflow wrap",
    definition: "A propriedade overflow-wrap especifica se o navegador pode ou não quebrar linhas com palavras longas, caso elas ultrapassem o contêiner.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Palavras longas não serão quebradas, mesmo se transbordarem o contêiner. Este é o padrão"
        },
        {
            name: "anywhere",
            value: "Palavras longas serão quebradas se transbordarem do recipiente"
        },
        {
            name: "break-word",
            value: "Palavras longas serão quebradas se transbordarem do recipiente"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "anywhere",
            code: "anywhere"
        },
        {
            name: "break-word",
            code: "break-word"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}