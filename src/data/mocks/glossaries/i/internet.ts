import { GlossaryTermProps } from "../../../../types/GlossaryProps";

export const internet: GlossaryTermProps = {
    name: "internet",
    definition: "A Internet é uma rede mundial de redes que usa o conjunto de protocolos da Internet (também chamado de TCP/IP por causa de seus dois protocolos mais importantes).",
    references: [
        {
            name: "tcp",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/TCP"
        },
        {
            name: "ip",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/IP_Address"
        },
        {
            name: "protocolos",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Protocol"
        },
    ]
}