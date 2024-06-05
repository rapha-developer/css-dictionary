import { Property } from "../Property";
import { PropertyExample, PropertyValue } from "../PropertyInterfaces";


export class AccentColor extends Property {
    protected readonly definition: string = "A propriedade acentua-color especifica a cor de destaque para controles da interface do usuário como: <input type='checkbox'>, <input type='radio'>, <input type='range'> and <progress>"
    protected readonly values: PropertyValue[] = this.makeValues();
    protected readonly examples: PropertyExample[] = this.makeExamples();
    
    showDefinition(): string {
        return this.definition
    }
    makeValues(): PropertyValue[] {
        return [
            {
                title: 'auto',
                value: 'Valor default. O browser escolhe a cor acentuada'
            },
            {
                title: 'color',
                value: 'Especifica a cor a ser usada como cor acentuada. Todos os valores legais de cores podem ser usados (rgb, hex, named-color, etc).'
            },
            {
                title: 'initial',
                value: 'Defina essa propriedade com seu valor padrão. Leia sobre valor padrão no glossário'
            },
            {
                title: 'inherit',
                value: 'Herda esta propriedade do seu elemento pai (parent). Leia sobre herança no glossário'
            }
        ]
    } 
    makeExamples(): PropertyExample[] {
        return [
            {
                exampleId: "1",
                exampleTitle: "auto",
                exampleDescription: `
                <div class="w-full h-10 flex items-center">
                    <input type="range" class="accentExample1" /> 
                </div>
                <style> 
                    .accentExample1 { background: yellow; color: red; accent-color: auto}
                </style>
                `
            },
            {
                exampleId: "2",
                exampleTitle: "color",
                exampleDescription: `
                <div class="w-full h-10 flex items-center">
                    <input type="range" class="accentExample2" /> 
                </div>
                <style> 
                    .accentExample2 { background: yellow; color: red; accent-color: blue}
                </style>
                `
            }, 
            {
                exampleId: "3",
                exampleTitle: "initial",
                exampleDescription: `
                <div class="w-full h-10 flex items-center">
                    <input type="range" class="accentExample3" /> 
                </div>
                <style> 
                    .accentExample3 { background: yellow; color: red; accent-color: initial}
                </style>
                `
            }, 
            {
                exampleId: "4",
                exampleTitle: "inherit",
                exampleDescription: `
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
    showValues(): PropertyValue[] {
        return this.values
    }
    showExamples(): PropertyExample[] {
        return this.examples
    }

}