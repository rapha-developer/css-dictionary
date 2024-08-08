import { PropertyProps } from "../../../../../types/PropertyProps";

export const colorSchemeData: PropertyProps = {
    name: "color scheme",
    definition: "A propriedade color-scheme indica com qual esquema de cores do sistema operacional um elemento deve ser renderizado.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "O elemento deve ser renderizado com o esquema de cores padrão do sistema operacional"
        },
        {
            name: "light",
            value: "O elemento deve ser renderizado com o esquema de cores light do sistema operacional"
        },
        {
            name: "dark",
            value: "O elemento deve ser renderizado com o esquema de cores dark do sistema operacional"
        },
        {
            name: "only",
            value: "Proíbe o navegador de substituir o esquema de cores do elemento"
        }
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "light",
            code: "light"
        },
        {
            name: "dark",
            code: "dark"
        },
        {
            name: "only",
            code: "only"
        }
    ]
}
