import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const cors: GlossaryTermProps = {
    name: "cors",
    definition: "CORS (Cross-Origin Resource Sharing) é um sistema que consiste na transmissão de cabeçalhos HTTP que determina se os navegadores bloqueiam o código JavaScript do frontend de acessar respostas para solicitações de origem cruzada.",
    references: [
        {
            name: "HTTP headers",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header"
        },
    ]
}