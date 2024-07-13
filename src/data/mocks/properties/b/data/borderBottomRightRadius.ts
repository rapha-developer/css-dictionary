import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderBottomRightRadiusData: PropertyProps = {
    name: "border bottom right radius",
    definition: "A propriedade border-bottom-right-radius define o raio do canto inferior direito. Ela permite adicionar bordas arrendondadas ao canto inferior direito.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Define a forma do canto inferior direito. O valor padrão é 0. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Define a forma do canto inferior direito em %"
        },
        {
            name: "NOTA",
            value: "Se você definir dois valores, o primeiro será para a borda inferior e o segundo para a borda direita. Se o segundo valor for omitido, ele será copiado do primeiro. Se um dos comprimentos for zero, o canto será quadrado, não arredondado."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "50px",
            code: "50px"
        },
        {
            name: "50px 10px",
            code: "50px 10px"
        },
        {
            name: "10px 50px",
            code: "10px 50px"
        },
        {
            name: "10%",
            code: "10%"
        },
        {
            name: "50%",
            code: "50%"
        },
        {
            name: "100%",
            code: "100%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}