import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transformStyleData: PropertyProps = {
    name: "transform style",
    definition: "A propriedade transform-style especifica como elementos aninhados são renderizados no espaço 3D.",
    category: "css property",
    values: [
        {
            name: "flat",
            value: "Especifica que os elementos filhos NÃO preservarão sua posição 3D. Este é o padrão"
        },
        {
            name: "preserve-3d",
            value: "Especifica que os elementos filhos preservarão sua posição 3D"
        },
        {
            name: "NOTA: ",
            value: "Esta propriedade deve ser usada junto com a propriedade transform."
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "flat",
            code: "flat"
        },
        {
            name: "preserve-3d",
            code: "preserve-3d"
        },
        genericPropertyExamplesData.initial,
    ]
}