import { PropertyProps } from "../../../../types/PropertyProps";



export const alignContent: PropertyProps = {
    name: "align content",
    definition: "Especifica o alinhamento entre as linhas dentro de um contêiner flexível quando os itens não ocupam todo o espaço disponível",
    category: "css property",
    values: [
        {
            name: 'stretch',
            value: 'Valor default. As linhas se esticam para ocupar o espaço restante'
        },
        {
            name: 'center',
            value: 'As linhas são empacotadas em direção ao centro do flex container'
        },
        {
            name: 'flex-start',
            value: 'As linhas são empacotadas no início do flex container'
        },
        {
            name: 'flex-end',
            value: 'As linhas são embaladas no final do flex container'
        },
        {
            name: 'space-between',
            value: 'As linhas são distribuídas uniformemente no flex container'
        },
        {
            name: 'space-around',
            value: 'As linhas são distribuídas uniformemente no flex container, com espaços de metade do tamanho em cada extremidade'
        },
        {
            name: 'space-evenly',
            value: 'As linhas são distribuídas uniformemente no flex container, com espaço igual ao seu redor'
        },
        {
            name: 'initial',
            value: 'Define esta propriedade com seu valor padrão. Leia sobre valor padrão no glossário.'
        },
        {
            name: 'inherit',
            value: 'Herda esta propriedade para seu elemento parent. Leia sobre herança no glossário.'
        }
    ],
    examples: [
        {
            name: "stretch",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-stretch h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "center",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-center h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "flex-start",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-start h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "flex-end",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-end h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "space-between",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-between h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "space-around",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-around h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "space-evenly",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4 content-evenly h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "initial",
            code: `
            <div class="w-full py-2 px-2 grid grid-cols-3 gap-4  content-baseline h-60 stripes-pink">
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div>
                <div class="w-8 h-8 bg-primary rounded-md"></div> 
            </div>
            `
        },
        {
            name: "inherit",
            code: `
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