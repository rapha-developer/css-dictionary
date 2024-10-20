import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const boolean: GlossaryTermProps = {
    name: "boolean",
    definition: "Em ciência da computação, um Boolean é um tipo de dado lógico que pode ter apenas os valores true ou false. Por exemplo, em JavaScript, condicionais Boolean são frequentemente usados ​​para decidir quais seções de código executar (como em instruções if) ou repetir (como em loops de um for).",
    references: [
        {
            name: "instruções if",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"
        },
        {
            name: "for",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"
        },
    ]
}