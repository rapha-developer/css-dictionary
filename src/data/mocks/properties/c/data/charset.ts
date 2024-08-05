import { PropertyProps } from "../../../../../types/PropertyProps";

export const charsetData: PropertyProps = {
    name: "charset",
    definition: "A regra @charset especifica a codificação de caracteres usada na folha de estilo. A regra @charset deve ser o primeiro elemento na folha de estilo e não ser precedida por nenhum caractere. Se várias regras @charset forem definidas, somente a primeira será usada. A regra @charset não pode ser usada dentro de um atributo de estilo (em um elemento HTML), ou dentro do elemento <style> onde o conjunto de caracteres da página HTML é relevante",
    category: "css property",
    values: [
        {
            name: "charset",
            value: "Especifica a codificação de caracteres a ser usada"
        }
    ],
    examples: [
        {
            name: "@charset 'UTF-8'",
            code: "UTF-8"
        }
    ]
}
