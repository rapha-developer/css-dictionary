import { GlossaryProps } from "../../types/GlossaryProps";
import { accent } from "./glossaries/a/accent";
import { acessibilidade } from "./glossaries/a/acessibilidade";
import { ajax } from "./glossaries/a/ajax";
import { api } from "./glossaries/a/api";
import { assincrono } from "./glossaries/a/assincrono";
import { baseline } from "./glossaries/b/baseline";
import { boolean } from "./glossaries/b/boolean";
import { browser } from "./glossaries/b/browser";
import { buffer } from "./glossaries/b/buffer";
import { bezierCurve } from "./glossaries/b/bezierCurve";
import { cssColorValues } from "./glossaries/c/colorValues";
import { caret } from "./glossaries/c/caret";
import { condicao } from "./glossaries/c/conditional";
import { characterEnconding } from "./glossaries/c/characterEncoding";
import { cors } from "./glossaries/c/cors";
import { initial } from "./glossaries/i/initial";
import { inherit } from "./glossaries/i/inherit";
import { lengthUnits } from "./glossaries/l/lengthUnits";
import { layoutViewport } from "./glossaries/l/layoutViewport";
import { loop } from "./glossaries/l/loop";
import { localScope } from "./glossaries/l/localScope";
import { localVariavel } from "./glossaries/l/localVariavel";
import { ipv4 } from "./glossaries/i/ipv4";
import { ipv6 } from "./glossaries/i/ipv6";
import { internet } from "./glossaries/i/internet";

export const allGlossaries: GlossaryProps[] = [
    {
        name: "Termos que começam com A",
        terms: [
            accent,
            acessibilidade,
            ajax,
            api,
            assincrono,
        ]
    },
    {
        name: "Termos que começam com B",
        terms: [
            baseline,
            bezierCurve,
            boolean,
            browser,
            buffer
        ]
    },
    {
        name: "Termos que começam com C",
        terms: [
            caret,
            cssColorValues,
            characterEnconding,
            condicao,
            cors
        ]
    },
    {
        name: "Termos que começam com I",
        terms: [
            initial,
            inherit,
            internet,
            ipv4,
            ipv6
        ]
    },
    {
        name: "Termos que começam com L",
        terms: [
            layoutViewport,            
            lengthUnits,
            localScope,
            localVariavel,
            loop,
        ]
    },
]