import { Property } from "../Property";
import { PropertyExample, PropertyValue } from "../PropertyInterfaces";


export class AlignContent extends Property {
    protected readonly definition: string = "Especifica o alinhamento entre as linhas dentro de um contêiner flexível quando os itens não ocupam todo o espaço disponível"
    protected readonly values: PropertyValue[] = this.makeValues();
    protected readonly examples: PropertyExample[] = this.makeExamples()
    
    showDefinition(): string {
        return this.definition
    }
    makeValues(): PropertyValue[] {
        return [
            {
                title: 'stretch',
                value: 'Valor default. As linhas se esticam para ocupar o espaço restante'
            },
            {
                title: 'center',
                value: 'As linhas são empacotadas em direção ao centro do flex container'
            },
            {
                title: 'flex-start',
                value: 'As linhas são empacotadas no início do flex container'
            },
            {
                title: 'flex-end',
                value: 'As linhas são embaladas no final do flex container'
            },
            {
                title: 'space-between',
                value: 'As linhas são distribuídas uniformemente no flex container'
            },
            {
                title: 'space-around',
                value: 'As linhas são distribuídas uniformemente no flex container, com espaços de metade do tamanho em cada extremidade'
            },
            {
                title: 'space-evenly',
                value: 'As linhas são distribuídas uniformemente no flex container, com espaço igual ao seu redor'
            },
            {
                title: 'initial',
                value: 'Define esta propriedade com seu valor padrão. Leia sobre valor padrão no glossário.'
            },
            {
                title: 'inherit',
                value: 'Herda esta propriedade para seu elemento parent. Leia sobre herança no glossário.'
            }
        ]
    } 
    makeExamples(): PropertyExample[] {
        return [
            {
                exampleId: "1",
                exampleTitle: "stretch",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-stretch h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "2",
                exampleTitle: "center",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-center h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "3",
                exampleTitle: "flex-start",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-start h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "4",
                exampleTitle: "flex-end",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-end h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "5",
                exampleTitle: "space-between",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-between h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "6",
                exampleTitle: "space-around",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-around h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "7",
                exampleTitle: "space-evenly",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-evenly h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "8",
                exampleTitle: "initial",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4  content-baseline h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
                `
            },
            {
                exampleId: "9",
                exampleTitle: "inherit",
                exampleDescription: `
                <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-stretch h-60 stripes-pink">
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div>
                    <div class="w-8 h-8 bg-primary rounded-md"></div> 
                </div>
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