import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const transformData: PropertyProps = {
    name: "transform",
    definition: "A propriedade transform aplica uma transformação 2D ou 3D a um elemento. Esta propriedade permite que você gire, dimensione, mova, incline, etc., elementos.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Define que não deve haver transformação"
        },
        {
            name: "matrix(n,n,n,n,n,n)",
            value: "Define uma transformação 2D, usando uma matriz de seis valores	"
        },
        {
            name: "matrix3d",
            value: "Define uma transformação 3D, usando uma matriz 4x4 de 16 valores"
        },
        {
            name: "translate(x,y)",
            value: "Define uma tradução 2D"
        },
        {
            name: "translate3d(x,y,z)",
            value: "Define uma tradução 3D"
        },
        {
            name: "translateX(x)",
            value: "Define uma tradução, usando apenas o valor do eixo X"
        },
        {
            name: "translateY(y)",
            value: "Define uma tradução, usando apenas o valor do eixo Y"
        },
        {
            name: "translateZ(z)",
            value: "Define uma translação 3D, usando apenas o valor do eixo Z"
        },
        {
            name: "scale(x,y)",
            value: "Define uma transformação de escala 2D"
        },
        {
            name: "scale(x,y,z)",
            value: "Define uma transformação de escala 3D"
        },
        {
            name: "scaleX(x)",
            value: "Define uma transformação de escala fornecendo um valor para o eixo X"
        },
        {
            name: "scaleY(y)",
            value: "Define uma transformação de escala fornecendo um valor para o eixo Y"
        },
        {
            name: "scaleZ(z)",
            value: "Define uma transformação de escala 3D fornecendo um valor para o eixo Z"
        },
        {
            name: "rotate(angle)",
            value: "Define uma rotação 2D, o ângulo é especificado no parâmetro"
        },
        {
            name: "rotate3d(x,y,z,angle)",
            value: "Define uma rotação 3D"
        },
        {
            name: "rotateX(angle)",
            value: "Define uma rotação 3D ao longo do eixo X"
        },
        {
            name: "rotateY(angle)",
            value: "Define uma rotação 3D ao longo do eixo Y"
        },
        {
            name: "rotateZ(angle)",
            value: "Define uma rotação 3D ao longo do eixo Z"
        },
        {
            name: "skew(x-angle,y-angle)",
            value: "Define uma transformação de inclinação 2D ao longo dos eixos X e Y"
        },
        {
            name: "skewX(angle)",
            value: "Define uma transformação de inclinação 2D ao longo do eixo X"
        },
        {
            name: "skewY(angle)",
            value: "Define uma transformação de inclinação 2D ao longo do eixo Y"
        },
        {
            name: "perspective(n)",
            value: "Define uma vista em perspectiva para um elemento transformado em 3D"
        },
        genericPropertyValuesData.initial,
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "rotate(10deg)",
            code: "rotate(10deg)"
        },
        {
            name: "rotateX(45deg)",
            code: "rotateX(45deg)"
        },
        {
            name: "rotateX(100deg)",
            code: "rotateX(100deg)"
        },
        {
            name: "rotateY(45deg)",
            code: "rotateY(45deg)"
        },
        {
            name: "rotateY(80deg)",
            code: "rotateY(80deg)"
        },
        {
            name: "skew(20deg,20deg)",
            code: "skew(20deg,20deg)"
        },
        {
            name: "skew(30deg,30deg)",
            code: "skew(30deg,30deg)"
        },
        {
            name: "skewX(30deg)",
            code: "skewX(30deg)"
        },
        {
            name: "skewX(45deg)",
            code: "skewX(45deg)"
        },
        {
            name: "skewY(30deg)",
            code: "skewY(30deg)"
        },
        {
            name: "skewY(45deg)",
            code: "skewY(45deg)"
        },
        {
            name: "Translate 1",
            code: "translate(20px,10px)"
        },
        {
            name: "Translate 2",
            code: "translate(20px,20px)"
        },
        {
            name: "scale(2,2)",
            code: "scale(2,2)"
        },
        {
            name: "scale(2,3)",
            code: "scale(2,3)"
        },
        {
            name: "Matrix 1",
            code: "matrix(0.866,0.7,-0.8,0.866,0,0)"
        },
        {
            name: "Matrix 2",
            code: "matrix(0.586,0.8,-0.8,0.586,0,0)"
        },
        {
            name: "Matrix 3",
            code: "matrix(0.586,0.8,-0.8,0.586,40,30)"
        },
        genericPropertyExamplesData.initial,
    ]
}