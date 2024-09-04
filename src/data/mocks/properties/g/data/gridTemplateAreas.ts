import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridTemplateAreasData: PropertyProps = {
    name: "grid template areas",
    definition: "A propriedade grid-template-areas especifica áreas dentro do layout da grade. Você pode nomear itens de grade usando a propriedade grid-area e, em seguida, fazer referência ao nome na propriedade grid-template-areas. Cada área é definida por apóstrofos. Use um ponto final para se referir a um item de grade sem nome.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Nenhuma área de grade nomeada"
        },
        {
            name: "itemnames",
            value: "Uma sequência que especifica como cada coluna e linha deve ser exibida"
        },
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "Exemplo 1",
            code: "'myArea myArea .'"
        },
        {
            name: "Exemplo 2",
            code: "'myArea myArea . .'"
        },
        {
            name: "Exemplo 3",
            code: "'myArea myArea . . .'"
        },
        {
            name: "Exemplo 4",
            code: "'myArea myArea .' 'myArea myArea .'"
        },
        {
            name: "Exemplo 5",
            code: "'myArea myArea . .' 'myArea myArea . .'"
        },
        {
            name: "Exemplo 6",
            code: "'. . .' '. myArea myArea'"
        },
    ]
}