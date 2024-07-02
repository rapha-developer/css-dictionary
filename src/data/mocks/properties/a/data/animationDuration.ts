import { PropertyProps } from "../../../../../types/PropertyProps";

export const animationDurationData: PropertyProps = {
    name: "animation duration",
    definition: "Especifica quanto tempo uma animação deve levar para completar um ciclo",
    category: "css property",
    values: [
        {
            name: "tempo",
            value: "Especifica quanto tempo uma animação deve levar para completar um ciclo. Isso pode ser especificado em segundos ou milissegundos. O valor padrão é 0, o que significa que nenhuma animação ocorrerá"
        },
        {
            name: "initial",
            value: "Define esta propriedade com seu valor padrão. Leia sobre initial no glossário"
        },
        {
            name: "inherit",
            value: "Herda esta propriedade de seu elemento pai. Leia sobre inherit no glossário"
        }
    ],
    examples: [
        {
            name: "500 ms",
            code: "500ms"
        },
        {
            name: "1s - um segundo",
            code: "1s"
        },
        {
            name: "3s - três segundos",
            code: "3s"
        },
        {
            name: "initial",
            code: "initial"
        },
        {
            name: "inherit",
            code: "inherit"
        }
    ]
}