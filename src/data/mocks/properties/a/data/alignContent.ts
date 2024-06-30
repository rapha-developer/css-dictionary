import { PropertyProps } from "../../../../../types/PropertyProps";

export const alignContentData: PropertyProps = {
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
            code: `stretch`
        },
        {
            name: "center",
            code: `center`
        },
        {
            name: "flex-start",
            code: `flex-start`
        },
        {
            name: "flex-end",
            code: `flex-end`
        },
        {
            name: "space-between",
            code: `space-between`
        },
        {
            name: "space-around",
            code: `space-around`
        },
        {
            name: "space-evenly",
            code: `space-evenly`
        },
        {
            name: "initial",
            code: `initial`
        },
        {
            name: "inherit",
            code: `inherit`
        },
    ]
}