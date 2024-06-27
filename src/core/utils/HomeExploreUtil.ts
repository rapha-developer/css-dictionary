import { v4 as uuidV4 } from "uuid"

export type HomeExploreUtilProps = {
    id?: string
    subtitle: string
    text: string
    title: string
    button: {
        signal: string
        url: string
        text: string
    }
}
export class HomeExploreUtil {
    private _id: string
    private _subtitle: string
    private _text: string
    private _title: string
    private _button: {
        _signal: string
        _url: string
        _text: string
    }
    constructor({
        id,
        subtitle,
        text,
        title,
        button
    }: HomeExploreUtilProps) {
        this._id = id ?? uuidV4()
        this._subtitle = subtitle
        this._title = title
        this._text = text
        this._button = {
            _signal: button.signal,
            _url: button.url,
            _text: button.text
        }
    }

    public get id(): string {
        return this._id
    }

    public get subtitle(): string {
        return this._subtitle
    }

    public get title(): string {
        return this._title
    }

    public get text(): string {
        return this._text
    }

    public get button(): {
        _signal: string
        _url: string
        _text: string
    } {
        return this._button
    }
    homeExploreViewModel(): HomeExploreUtilProps {
        return {
            id: this?._id,
            subtitle: this._subtitle,
            title: this._title,
            text: this._text,
            button: {
                signal: this._button._signal,
                url: this._button._url,
                text: this._button._text
            }
        }
    }
}

export type repositoryHomeExploreUtilProps = {
    [key: string]: HomeExploreUtilProps
}

export const repositoryHomeExploreUtils: repositoryHomeExploreUtilProps = {
    homeExplore: (new HomeExploreUtil({
        subtitle: "alunos e estudantes",
        title: "Ensinamos os fundamentos do CSS em cada curso & em diferentes módulos.",
        text: "Os cursos são separados em diferentes módulos, cada módulo possui uma única propriedade css, com definições, valores & exemplos. Aprenda conforme o seu tempo.",
        button: {
            url: "/courses",
            text: "explore todos os cursos",
            signal: "➔"
        }
    })).homeExploreViewModel(),
    homeInstructor: (new HomeExploreUtil({
        subtitle: "sobre nós",
        title: "Nos conheça & aumente seu conhecimento",
        text: "Cada página, curso, módulo ou propriedade CSS foi detalhada com o objetivo de aumentar o seu nível de conhecimento a respeito do desenvolvimento CSS em ambientes de aplicações web e entre outros",
        button: {
            url: "/about",
            text: "veja mais sobre nós",
            signal: " ➔"
        }
    })).homeExploreViewModel()
}