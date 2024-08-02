import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const boxDecorationBreakData: PropertyProps = {
    name: "box decoration break",
    definition: "A propriedade box-decoration-break especifica como o plano de fundo, o preenchimento, a borda, a imagem da borda, a sombra da caixa, a margem e o caminho de recorte de um elemento são aplicados.",
    category: "css property",
    values: [
        {
            name: "slice",
            value: "Padrão. Decorações de caixa são aplicadas ao elemento como um todo e quebram nas bordas dos fragmentos do elemento"
        },
        {
            name: "clone",
            value: "As decorações de caixa se aplicam a cada fragmento do elemento como se os fragmentos fossem elementos individuais. As bordas envolvem as quatro bordas de cada fragmento do elemento, e os planos de fundo são redesenhados por completo para cada fragmento."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "slice",
            code: "slice"
        },
        {
            name: "clone",
            code: "clone"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}