import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderRadiusData: PropertyProps = {
    name: "border radius",
    definition: "A propriedade border-radius define o raio dos cantos do elemento. Esta propriedade permite adicionar cantos arredondados aos elementos!",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Define a forma dos cantos. O valor padrão é 0. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Define a forma dos cantos em %"
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
            name: "50px 25px",
            code: "50px 25px"
        },
        {
            name: "50px 10px 30px 100px",
            code: "50px 10px 30px 100px"
        },
        {
            name: "50% 25px 20% 30px",
            code: "50% 25px 20% 30px"
        },
        {
            name: "10% 30px",
            code: "10% 30px"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}