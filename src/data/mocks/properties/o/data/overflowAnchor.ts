import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const overflowAnchorData: PropertyProps = {
    name: "overflow anchor",
    definition: "A ancoragem de rolagem é um recurso no navegador que impede que uma área visível que é rolada para o foco se mova quando um novo conteúdo é carregado acima. Isso normalmente é um problema em uma conexão lenta se o usuário rolar para baixo e começar a ler antes que a página seja totalmente carregada.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. A ancoragem de rolagem está ativada"
        },
        {
            name: "none",
            value: "A ancoragem de rolagem está desativada"
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
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}