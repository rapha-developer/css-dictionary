import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const caret: GlossaryTermProps = {
    name: "caret",
    definition: "Um cursor (às vezes chamado de 'cursor de texto') é um indicador exibido na tela para indicar onde a entrada de texto será inserida. A maioria das interfaces de usuário representa o cursor usando uma linha vertical fina ou uma caixa do tamanho de um caractere que pisca, mas isso pode variar. Este ponto no texto é chamado de ponto de inserção. A palavra 'caret' diferencia o ponto de inserção do texto do cursor do mouse. Na web, um cursor é usado para representar o ponto de inserção nos elementos <input> e <textarea>, bem como em quaisquer elementos cujo atributo editável de conteúdo esteja definido, permitindo assim que o conteúdo do elemento seja editado pelo usuário.",
    references: [
        {
            name: "<input>",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input"
        },
        {
            name: "<textarea>",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
        },
        {
            name: "content editable",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"
        }, 
    ]
}