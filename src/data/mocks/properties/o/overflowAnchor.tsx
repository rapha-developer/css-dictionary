import { useState } from "react"
import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"

export default function overflowAnchorTemplate({ name, value }: {name: string, value: 'auto' | 'none'}) {
    const inheritValue = `none`
    const [showDiv, setShowDiv] = useState<boolean>(false)

    function handleShowDiv() {
        setShowDiv((prevState) => !prevState)
    }
    return (
        <div className="flex flex-col gap-4 px-4 py-6 w-full">
            <div className="w-full h-full" style={{overflowAnchor: inheritValue}}>
                <div className="w-52 h-28 border border-solid border-primary p-1 mx-auto" 
                    style={{overflow: 'scroll', overflowAnchor: value}}>
                    {showDiv && <div className="w-full h-10 bg-green-300 rounded-lg mb-10"></div>}
                    <p className="font-outfit text-base text-secondary font-medium">
                    A ancoragem de rolagem é um recurso no navegador que impede que uma área visível que é rolada para o foco se mova quando um novo conteúdo é carregado acima. Isso normalmente é um problema em uma conexão lenta se o usuário rolar para baixo e começar a ler antes que a página seja totalmente carregada.
                    </p>
                    <button className="py-3 px-5 rounded-lg bg-primary font-outfit text-sm text-white mt-5"
                    onClick={handleShowDiv}>
                        Clique aqui
                    </button>
                </div>
                
            </div>
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}