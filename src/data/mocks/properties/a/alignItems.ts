import { PropertyProps } from "../../../../types/PropertyProps";

export const alignItems: PropertyProps = {
    name: "align items",
    definition: "A propriedade align-items especifica o alinhamento padrão para itens dentro de um flexbox ou contêiner grid",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Comporta-se como 'stretch' para flexbox e itens grid, ou 'start' para itens grid com um tamanho de bloco definido."
        },
        {
            name: "stretch",
            value: "Os itens são esticados para caber no contêiner"
        },
        {
            name: "center",
            value: "Os itens são posicionados no centro do contêiner"
        },
        {
            name: "flex-start",
            value: "Os itens são posicionados no início do contêiner"
        },
        {
            name: "flex-end",
            value: "Os itens são posicionados no final do contêiner"
        },
        {
            name: "start",
            value: "Os itens são posicionados no início de suas células individuais do grid, na direção do bloco"
        },
        {
            name: "end",
            value: "Os itens são posicionados no final de suas células individuais do grid, na direção do bloco"
        },
        {
            name: "baseline",
            value: "Os itens são posicionados na linha de base do contêiner"
        },
        {
            name: "initial",
            value: "Define esta propriedade com seu valor padrão. Leia sobre inicial"
        },
        {
            name: "inherit",
            value: "Herda esta propriedade de seu elemento pai. Leia sobre herdar"
        },
    ],
    examples: [
        {
            name: "normal",
            code: `
            <div class="w-full py-2 px-2 flex" style={{'items-center': 'normal'}}>
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "stretch",
            code: `
            <div class="w-full py-2 px-2 flex" style={{'items-center': 'stretch'}}>
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "center",
            code: `
            <div class="w-full py-2 px-2 flex items-center">
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "flex-start",
            code: `
            <div class="w-full py-2 px-2 flex items-start">
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "flex-end",
            code: `
            <div class="w-full py-2 px-2 flex items-end">
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "baseline",
            code: `
            <div class="w-full py-2 px-2 flex items-baseline">
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "initial",
            code: `
            <div class="w-full py-2 px-2 flex" style={{'items-center': 'initial'}}>
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
        {
            name: "stretch",
            code: `
            <div class="w-full py-2 px-2 flex items-stretch">
                <div class="w-8 h-8 bg-body-100"></div>
                <div class="w-8 h-10 bg-primary"></div>
                <div class="w-8 h-12 bg-secondary"></div>
            </div>
            `
        },
    ]
} 