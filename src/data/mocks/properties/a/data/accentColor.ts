import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const accentColorData: PropertyProps = {
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
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: `auto`
        },
        {
            name: "color",
            code: `purple`
        }, 
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}