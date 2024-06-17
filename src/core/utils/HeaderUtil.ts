import { v4 as uuidV4 } from "uuid"

export class HeaderUtil {
    private _id: string
    private _url: string
    private _text: string
    private _outline: boolean

    constructor({
        id,
        url,
        text,
        outline
    }: {
        url: string
        text: string
        id?: string
        outline?: boolean
    }) {
        this._id = id ?? uuidV4()
        this._url = url
        this._text = text
        this._outline = outline ?? false
    }

    public get id(): string {
        return this._id
    }

    public get url(): string {
        return this._url
    }

    public get text(): string {
        return this._text
    }

    public get outline(): boolean {
        return this._outline
    }
    headerUtilViewModel(): {
        url: string
        text: string
        outline: boolean
    } {
        return {
            url: this._url,
            text: this._text,
            outline: this._outline
        }
    }
}


export const repositoryHeaderLinksUtils: {url: string, text: string, outline: boolean }[] = [
    (new HeaderUtil({
        url: `/`,
        text: `home`
    })).headerUtilViewModel(),
    (new HeaderUtil({
        url: `/courses`, 
        text: `courses`
    })).headerUtilViewModel(),
    (new HeaderUtil({
        url: `/glossary`, 
        text: `glossary`
    })).headerUtilViewModel(),
    (new HeaderUtil({
        url: `/about`, 
        text: `about`,
        outline: true
    })).headerUtilViewModel(),
]