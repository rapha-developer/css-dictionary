import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const outlineOffsetData: PropertyProps = {
    name: "outline offset",
    definition: "A propriedade outline-offset adiciona espaço entre o contorno e a borda ou borda de um elemento. O espaço entre um elemento e seu contorno é transparente. Os contornos diferem das bordas de três maneiras: ➊ Um contorno é uma linha desenhada ao redor dos elementos, fora da borda. ➋ Um esboço não ocupa espaço. ➌ Um contorno pode ser não retangular",
    category: "css property",
    values: [
        {
            name: "length",
            value: "A distância que o contorno é inicial da borda da borda. O valor padrão é 0"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "0",
            code: "0"
        },
        {
            name: "2px",
            code: "2px"
        },
        {
            name: "10px",
            code: "10px"
        },
        {
            name: "-10px",
            code: "-10px"
        },
        {
            name: "-20px",
            code: "-20px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}