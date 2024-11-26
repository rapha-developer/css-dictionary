import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transitionPropertyData: PropertyProps = {
    name: "transition property",
    definition: "A propriedade transition-property especifica o nome da propriedade CSS para a qual o efeito de transição se destina (o efeito de transição começará quando a propriedade CSS especificada for alterada).",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Nenhuma propriedade terá um efeito de transição"
        },
        {
            name: "all",
            value: "Valor padrão. Todas as propriedades receberão um efeito de transição"
        },
        {
            name: "property",
            value: "Define uma lista separada por vírgulas de nomes de propriedades CSS para o qual o efeito de transição é"
        },
        {
            name: "DICA: ",
            value: "Um efeito de transição normalmente pode ocorrer quando um usuário passa o mouse sobre um elemento."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "color",
            code: "color"
        },
        {
            name: "width",
            code: "width"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}