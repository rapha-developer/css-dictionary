import { PropertyProps } from "../../../../../types/PropertyProps";

export const fontFaceData: PropertyProps = {
    name: "font face",
    definition: 'Com a regra @font-face, os web designers não precisam mais usar uma das fontes "seguras para a web". Na regra @font-face, você deve primeiro definir um nome para a fonte (por exemplo, minhaFonte) e, em seguida, apontar para o arquivo de fonte. Para usar a fonte para um elemento HTML, consulte o nome da fonte (minhaFonte) por meio da propriedade font-family.',
    category: "css property",
    values: [
        {
            name: "font-family",
            value: "Obrigatório. Define o nome (name) da fonte."
        },
        {
            name: "src",
            value: "Define a(s) URL(s) de onde a fonte deve ser baixada (downloaded)"
        },
        {
            name: "font-stretch",
            value: "Opcional. Define como a fonte deve ser esticada. O valor padrão é 'normal'. Valores permitidos: normal, condensed, ultra-condensed, extra-condensed, semi-condensed, expanded, semi-expanded, extra-expanded e ultra-expanded."
        },
        {
            name: "font-style",
            value: "Opcional. Define como a fonte deve ser estilizada. O valor padrão é 'normal'. Valores permitidos: normal, italic e oblique"
        },
        {
            name: "font-weight",
            value: "Opcional. Define a negrito da fonte. O valor padrão é 'normal'. Valores permitidos: 100, 200, 300, 400, 500, 600, 700, 800, 900."
        },
        {
            name: "unicode-range",
            value: "Opcional. Define o intervalo de caracteres unicode que a fonte suporta. O valor padrão é 'U+0-10FFFF'"
        }
    ],
    examples: [
        {
            name: "minhaFonte",
            code: " { font-family: minhaFonte; src: url(minhaFonte.woff); }"
        }
    ]
}