import { PropertyProps } from "../../../../types/PropertyProps";


export const accentColor: PropertyProps = {
    name: "accent color",
    definition: "A propriedade acentua-color especifica a cor de destaque para controles da interface do usuário como: <input type='checkbox'>, <input type='radio'>, <input type='range'> and <progress>",
    category: "css property",
    values:  [
        {
            name: 'auto',
            value: 'Valor default. O browser escolhe a cor acentuada'
        },
        {
            name: 'color',
            value: 'Especifica a cor a ser usada como cor acentuada. Todos os valores legais de cores podem ser usados (rgb, hex, named-color, etc).'
        },
        {
            name: 'initial',
            value: 'Defina essa propriedade com seu valor padrão. Leia sobre valor padrão no glossário'
        },
        {
            name: 'inherit',
            value: 'Herda esta propriedade do seu elemento pai (parent). Leia sobre herança no glossário'
        }
    ],
    examples: [
        {
            name: "auto",
            code: `
            <div class="w-full h-10 flex items-center">
                <input type="range" class="accentExample1" /> 
            </div>
            <style> 
                .accentExample1 { background: yellow; color: red; accent-color: auto}
            </style>
            `
        },
        {
            name: "color",
            code: `
            <div class="w-full h-10 flex items-center">
                <input type="range" class="accentExample2" /> 
            </div>
            <style> 
                .accentExample2 { background: yellow; color: red; accent-color: blue}
            </style>
            `
        }, 
        {
            name: "initial",
            code: `
            <div class="w-full h-10 flex items-center">
                <input type="range" class="accentExample3" /> 
            </div>
            <style> 
                .accentExample3 { background: yellow; color: red; accent-color: initial}
            </style>
            `
        }, 
        {
            name: "inherit",
            code: `
            <div class="w-full h-10 flex items-center accentFather4">
                <input type="range" class="accentExample4" /> 
            </div>
            <style> 
                .accentFather4 {accent-color: yellow}
                .accentExample4 { background: yellow; color: red; accent-color: inherit}
            </style>
            `
        }, 
    ]
}