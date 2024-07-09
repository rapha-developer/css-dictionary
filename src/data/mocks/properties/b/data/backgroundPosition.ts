import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundPositionData: PropertyProps = {
    name: "background position",
    definition: "Especifica a posição de uma imagem de fundo",
    category: "css property",
    values: [
        {
            name: "<left top> <left center> <left bottom> <right top> <right center> <right bottom> <center top> <center center> <center bottom>",
            value: "Se você especificar apenas uma palavra-chave, o outro valor será 'centro'"
        },
        {
            name: "x% y%",
            value: "O primeiro valor é a posição horizontal e o segundo valor é a vertical. O canto superior esquerdo é 0% 0%. O canto inferior direito é 100% 100%. Se você especificar apenas um valor, o outro valor será 50%. O valor padrão é: 0% 0%"
        },
        {
            name: "xpos ypos",
            value: "O primeiro valor é a posição horizontal e o segundo valor é a vertical. O canto superior esquerdo é 0 0. As unidades podem ser pixels (0px 0px) ou qualquer outra unidade CSS. Se você especificar apenas um valor, o outro valor será 50%. Você pode misturar% e posições"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "left top",
            code: "left top"
        }, 
        {
            name: "left center",
            code: "left center"
        }, 
        {
            name: "left bottom",
            code: "left bottom"
        }, 
        {
            name: "right top",
            code: "right top"
        }, 
        {
            name: "right center",
            code: "right center"
        }, 
        {
            name: "right bottom",
            code: "right bottom"
        }, 
        {
            name: "center top",
            code: "center top"
        }, 
        {
            name: "center center",
            code: "center center"
        }, 
        {
            name: "center bottom",
            code: "center bottom"
        }, 
        {
            name: "10% 40%",
            code: "10% 40%"
        }, 
        {
            name: "50px 150px",
            code: "50px 150px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}