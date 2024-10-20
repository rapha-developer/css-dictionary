import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const loop: GlossaryTermProps = {
    name: "loop",
    definition: "Um loop é uma sequência de instruções que é repetida até que uma certa condição seja atendida. Um exemplo seria o processo de obter um item de dados e alterá-lo, e então certificar-se de que alguma condição seja verificada — como se um contador tivesse atingido um número prescrito. Loops são uma maneira de executar uma declaração por um número variável de vezes. O mesmo efeito pode ser alcançado com recursão, especialmente em linguagens onde todos os dados são imutáveis, tornando impossível atualizar uma variável de contador.",
    references: [
        {
            name: "condição: (conditional)",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Conditional"
        },
        {
            name: "recursão",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Recursion"
        },
        {
            name: "imutabilidade",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Immutable"
        },
    ]
}