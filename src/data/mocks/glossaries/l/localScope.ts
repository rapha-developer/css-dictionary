import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const localScope: GlossaryTermProps = {
    name: "local scope",
    definition: "O escopo local é uma característica das variáveis ​​que as torna locais (ou seja, o nome da variável só é vinculado ao seu valor dentro de um escopo que não é o escopo global).",
    references: [
        {
            name: "variável",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Variable"
        },
        {
            name: "valor",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Value"
        },
        {
            name: "escopo global",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Global_scope"
        },
    ]
}