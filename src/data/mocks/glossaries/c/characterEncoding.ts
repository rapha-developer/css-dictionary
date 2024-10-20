import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const characterEnconding: GlossaryTermProps = {
    name: "Character encoding",
    definition: "A codificação de caracteres define um mapeamento entre bytes e texto. Uma sequência de bytes permite diferentes interpretações textuais. Ao especificar uma codificação particular (como UTF-8), especificamos como a sequência de bytes deve ser interpretada. Por exemplo, em HTML normalmente declaramos uma codificação de caracteres UTF-8, usando a seguinte linha: <meta charset='utf-8' />",
    references: [
        {
            name: "definição de character enconding",
            url: "https://www.w3.org/International/articles/definitions-characters/"
        },
    ]
}